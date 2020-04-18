import { GoogleAnalyticsEmbedAPI } from './GoogleAnalyticsEmbedAPI';
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
    serverAuth?: {
        access_token: string;
    };
}
/**
 * See documentation: https://react-use-analytics-api.netlify.app/useAuthorize
 *
 * The `useAuthorize` hook can be used to authorize the user via the [Google Analytics Embed API](https://react-use-analytics-api.netlify.app/useAnalyticsApi) in several ways:
 * - Render an authorize button using a [Client ID](https://react-analytics-charts.netlify.app/google-oauth-client-id)
 * - Authorize with an [access token](https://ga-dev-tools.appspot.com/embed-api/server-side-authorization/)
 *
 * The user must be authorized before the API can query for things like chart data.
 *
 * @param gapi The [Google Analytics Embed API](https://react-use-analytics-api.netlify.app/useAnalyticsApi). When `undefined`, calling `authorize` does nothing.
 * @param options The [options](https://developers.google.com/analytics/devguides/reporting/embed/v1/component-reference#auth-options) for the authorization.
 * @param onSignIn Called on a successful sign-in. You can use this to do things like change the view on auth success.
 */
export declare const useAuthorize: (gapi: GoogleAnalyticsEmbedAPI | undefined, options: AuthorizeOptions, onSignIn?: (() => void) | undefined) => () => void;
