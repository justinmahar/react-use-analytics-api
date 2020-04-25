import { EventEmitter } from 'events';
import * as React from 'react';
import { GoogleAnalyticsEmbedAPI } from './GoogleAnalyticsEmbedAPI';

/**
 * See documentation: https://devboldly.github.io/react-use-analytics-api/useAnalyticsApi#return
 */
export interface GoogleAnalyticsEmbedAPIHook {
  /** `true` when the Google Analytics Embed API is ready to use, `false` otherwise. */
  ready: boolean;
  /** The [Google Analytics Embed API](https://ga-dev-tools.appspot.com/embed-api/). This will be `undefined` until the analytics API is fully loaded and ready. */
  gapi?: GoogleAnalyticsEmbedAPI;
  /** `true` if the user is authorized, `false` otherwise. If you authorize via the [`useAuthorize`](https://devboldly.github.io/react-use-analytics-api/useAuthorize) hook, this property will be updated for all `useAnalyticsApi` hooks. Otherwise, it will be set to the last known value when the hook was instantiated. */
  authorized: boolean;
  /** When not `undefined`, this indicates an error loading the API. */
  error?: Error;
}

/**
 * Contains `gapi` and tracks whether the script was requested and if we're authorized.
 *
 * - `scriptRequested` - Type: boolean - False when the script has not been requested yet. True otherwise (script is loading).
 * - `authorized` - Type: boolean - True when authorized, false otherwise.
 * - `gapi` - Type: [GoogleAnalyticsEmbedAPI](https://developers.google.com/analytics/devguides/reporting/embed/v1) &#124; undefined - The API, or undefined if it's not loaded and ready.
 */
export const apiSingleton: {
  scriptRequested: boolean;
  authorized: boolean;
  gapi?: GoogleAnalyticsEmbedAPI;
} = {
  scriptRequested: false,
  authorized: false,
  gapi: undefined,
};

// Check if we have it loaded and ready, and set singleton up.
if (typeof window !== 'undefined') {
  const win: any = window;
  if (win.gapi && win.gapi.analytics) {
    // At this point, we've requested the script, but it may not be fully loaded yet.
    apiSingleton.scriptRequested = true;
    // If we've fully loaded it (all dependencies we need are present), set it.
    apiSingleton.gapi =
      !!win.gapi.analytics.ViewSelector && !!win.gapi.analytics.auth && !!win.gapi.analytics?.googleCharts.DataChart
        ? win.gapi
        : undefined;
    // Set whether we're authorized
    apiSingleton.authorized = win.gapi.analytics.auth ? win.gapi.analytics.auth.isAuthorized() : false;
  }
}

/**
 * Used to keep hooks synchronized.
 *
 * Events:
 * - on `authorized` - `(isAuthorized) => void` - The user is signed in or signed out.
 * - on `ready` - `() => void` - The API is loaded and ready.
 */
export const apiStateEmitter = new EventEmitter();
apiStateEmitter.setMaxListeners(100);
/** The user is signed in or signed out. */
export const authorizedEvent = 'authorized';
/** The API is loaded and ready. */
export const readyEvent = 'ready';

/**
 * See documentation: https://devboldly.github.io/react-use-analytics-api/useAnalyticsApi
 *
 *  Use this hook to load and access the [Google Analytics Embed API](https://ga-dev-tools.appspot.com/embed-api/) (`gapi`).
 *
 * The hook will run the [library loading script from Google](https://developers.google.com/analytics/devguides/reporting/embed/v1/getting-started#step-2), grab the API out from `window.gapi` (where Google loads it to), and store it as a singleton.
 * It will reference the singleton thereafter, keeping `window` interaction to a minimum.
 *
 * State changes that happen outside of React (such as API readiness and [authorization](https://devboldly.github.io/react-use-analytics-api/useAuthorize)) are synchronized across all hooks via a singleton emitter effect. This allows you to use the hook in multiple places while keeping them all in sync.
 */
export const useAnalyticsApi = (): GoogleAnalyticsEmbedAPIHook => {
  const [gapi, setGapi] = React.useState<GoogleAnalyticsEmbedAPI | undefined>(apiSingleton.gapi);
  const [hookReady, setHookReady] = React.useState<boolean>(typeof apiSingleton.gapi !== 'undefined');
  const [authorized, setAuthorized] = React.useState<boolean>(apiSingleton.authorized);
  const [error, setError] = React.useState<Error | undefined>(undefined);

  React.useEffect(() => {
    let aborted = false;
    const authorizedListener = (isAuthorized: boolean): void => {
      if (!aborted) {
        setAuthorized(isAuthorized);
      }
    };
    apiStateEmitter.on(authorizedEvent, authorizedListener);
    const readyListener = (): void => {
      if (!aborted) {
        setGapi(apiSingleton.gapi);
        setHookReady(true);
      }
    };
    apiStateEmitter.on(readyEvent, readyListener);
    return () => {
      aborted = true;
      apiStateEmitter.off(authorizedEvent, authorizedListener);
      apiStateEmitter.off(readyEvent, readyListener);
    };
  });

  React.useEffect(() => {
    try {
      if (typeof window !== 'undefined') {
        const win: any = window;
        // Only load the script once.
        if (!apiSingleton.scriptRequested) {
          apiSingleton.scriptRequested = true;
          // Call the code from Google to load the API into window.
          loadGoogleApi();
          // At this point, gapi has been partially loaded into window.
          // We're still loading analytics. Google adds an emitter
          // called ready() that will fire when it's fully loaded.
          if (win.gapi && win.gapi.analytics && win.gapi.analytics.ready) {
            win.gapi.analytics.ready(() => {
              // At this point, we can use the Analytics Embed API!
              apiSingleton.gapi = win.gapi;
              // Set if we're already authorized
              if (win.gapi.analytics.auth.isAuthorized()) {
                apiSingleton.authorized = true;
              }

              // Update the hook's state
              setGapi(apiSingleton.gapi);
              setHookReady(true);
              setAuthorized(apiSingleton.authorized);
              // This hook is ready, but we need to update other hooks subscribed
              // to the singleton emitter
              apiStateEmitter.emit(readyEvent);
              apiStateEmitter.emit(authorizedEvent, apiSingleton.authorized);
            });
          } else {
            throw new Error("Couldn't add ready listener to gapi analytics.");
          }
        }
      }
    } catch (e) {
      setError(e);
    }
  }, [setAuthorized]);

  return { ready: hookReady, gapi, error, authorized: !!authorized };
};

/**
 * Ported to TypeScript from:
 * https://developers.google.com/analytics/devguides/reporting/embed/v1/getting-started#step-2
 */
const loadGoogleApi = (): void => {
  if (typeof window !== 'undefined') {
    (function(w: any, d: any, s: any) {
      const g: any = w.gapi || (w.gapi = {} as GoogleAnalyticsEmbedAPI);
      g.analytics = {
        q: [],
        ready: function(cb: any) {
          this.q.push(cb);
        },
      };
      const js = d.createElement(s);
      const fjs = d.getElementsByTagName(s)[0];
      js.src = 'https://apis.google.com/js/platform.js';
      fjs.parentNode.insertBefore(js, fjs);
      js.onload = function() {
        g.load('analytics');
      };
    })(window, document, 'script');
  }
};
