import * as React from 'react';
import { GoogleAnalyticsEmbedAPI } from './GoogleAnalyticsEmbedAPI';
import { apiSingleton, apiStateEmitter } from './useAnalyticsApi';

/**
 * See: https://developers.google.com/analytics/devguides/reporting/embed/v1/component-reference#auth-options
 */
export interface AuthorizeOptions {
  /** The client ID of your project in the [developers console](https://console.developers.google.com/project). */
  clientId?: string;
  /** The ID of an HTML element in the DOM that will host the sign-in button. You may also pass a reference to the element itself. */
  container?: string;
  /** The text to display before a logged in user's email address. Defaults to `'You are logged in as: '`. */
  userInfoLabel?: string;
  /** A list of Google API auth scopes that your application is requesting. To see all available scopes, visit the [OAuth 2.0 Playground](https://developers.google.com/oauthplayground/). For Google Analytics API auth scopes see the developer guides for [Configuration](https://developers.google.com/analytics/devguides/config) and [Reporting](https://developers.google.com/analytics/devguides/reporting) resources. */
  scopes?: string[];
  /**
   * Indicates whether the `scopes` option replaces the default Embed API scopes or adds to them. Specifying `false` (the default) will add to the default scopes, and specifying `true` will replace them with the ones specified by the `scopes` option.
   *
   * The default scopes value is: `['https://www.googleapis.com/auth/analytics.readonly']`.
   *
   * Note: authenticating via the Embed API requires access to the user's basic profile. Those scopes cannot be overwritten.
   */
  overwriteDefaultScopes?: boolean;
  /**
   * If you already have a valid access token, you can pass it to the authorize method directly and the user will not be prompted to authorize. For details on how to retrieve an access token, see the [OAuth 2.0 documentation](https://developers.google.com/identity/protocols/oauth2).
   */
  serverAuth?: { access_token: string };
}

/**
 * See documentation: https://devboldly.github.io/react-use-analytics-api/useAuthorize
 *
 * The `useAuthorize` hook can be used to authorize the user via the [Google Analytics Embed API](https://devboldly.github.io/react-use-analytics-api/useAnalyticsApi) in several ways:
 * - Render an authorize button using a [Client ID](https://devboldly.github.io/react-analytics-charts/google-oauth-client-id)
 * - Authorize with an [access token](https://ga-dev-tools.appspot.com/embed-api/server-side-authorization/)
 *
 * The user must be authorized before the API can query for things like chart data.
 *
 * @param gapi The [Google Analytics Embed API](https://devboldly.github.io/react-use-analytics-api/useAnalyticsApi). When `undefined`, calling `authorize` does nothing.
 * @param options The [options](https://developers.google.com/analytics/devguides/reporting/embed/v1/component-reference#auth-options) for the authorization.
 * @param onSignIn Called on a successful sign-in. You can use this to do things like change the view on auth success.
 */
export const useAuthorize = (
  gapi: GoogleAnalyticsEmbedAPI | undefined,
  options: AuthorizeOptions,
  onSignIn?: () => void
): (() => void) => {
  const [authorized, setAuthorized] = React.useState<boolean>(apiSingleton.authorized);
  const [run, setRun] = React.useState(false);
  React.useEffect(() => {
    let aborted = false;
    const authorizedListener = (isAuthorized: boolean): void => {
      if (!aborted) {
        setAuthorized(isAuthorized);
      }
    };
    apiStateEmitter.on('authorized', authorizedListener);
    return () => {
      aborted = true;
      apiStateEmitter.off('authorized', authorizedListener);
    };
  });

  React.useEffect(() => {
    if (run) {
      setRun(false);
      if (typeof gapi !== 'undefined') {
        const signInHandler = (): void => {
          if (!authorized) {
            setAuthorized(true);
          }
          apiSingleton.authorized = true;
          apiStateEmitter.emit('authorized', true);
          if (typeof onSignIn !== 'undefined') {
            onSignIn();
          }
        };
        gapi.analytics.auth.on('signIn', signInHandler);
        gapi.analytics.auth.authorize({
          // There seems to be a typo in the official spec docs (clientId vs clientid)
          // So we'll include both. ¯\_(ツ)_/¯
          clientid: options.clientId,
          ...options,
        });
      }
    }
  }, [run, gapi, options, authorized, onSignIn]);

  const authorize = (): void => {
    setRun(true);
  };
  return authorize;
};
