/// <reference types="node" />
import { EventEmitter } from 'events';
import { GoogleAnalyticsEmbedAPI } from './GoogleAnalyticsEmbedAPI';
/**
 * See documentation: https://react-use-analytics-api.netlify.app/useAnalyticsApi#return
 */
export interface GoogleAnalyticsEmbedAPIHook {
    /** `true` when the Google Analytics Embed API is ready to use, `false` otherwise. */
    ready: boolean;
    /** The [Google Analytics Embed API](https://ga-dev-tools.appspot.com/embed-api/). This will be `undefined` until the analytics API is fully loaded and ready. */
    gapi?: GoogleAnalyticsEmbedAPI;
    /** `true` if the user is authorized, `false` otherwise. If you authorize via the [`useAuthorize`](https://react-use-analytics-api.netlify.app/useAuthorize) hook, this property will be updated for all `useAnalyticsApi` hooks. Otherwise, it will be set to the last known value when the hook was instantiated. */
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
export declare const apiSingleton: {
    scriptRequested: boolean;
    authorized: boolean;
    gapi?: GoogleAnalyticsEmbedAPI;
};
/**
 * Used to keep hooks synchronized.
 *
 * Events:
 * - on `authorized` - `(isAuthorized) => void` - The user is signed in or signed out.
 * - on `ready` - `() => void` - The API is loaded and ready.
 */
export declare const apiStateEmitter: EventEmitter;
/**
 * See documentation: https://react-use-analytics-api.netlify.app/useAnalyticsApi
 *
 *  Use this hook to load and access the [Google Analytics Embed API](https://ga-dev-tools.appspot.com/embed-api/) (`gapi`).
 *
 * The hook will run the [library loading script from Google](https://developers.google.com/analytics/devguides/reporting/embed/v1/getting-started#step-2), grab the API out from `window.gapi` (where Google loads it to), and store it as a singleton.
 * It will reference the singleton thereafter, keeping `window` interaction to a minimum.
 *
 * State changes that happen outside of React (such as API readiness and [authorization](https://react-use-analytics-api.netlify.app/useAuthorize)) are synchronized across all hooks via a singleton emitter effect. This allows you to use the hook in multiple places while keeping them all in sync.
 */
export declare const useAnalyticsApi: () => GoogleAnalyticsEmbedAPIHook;
