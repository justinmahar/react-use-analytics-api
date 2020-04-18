import { GoogleAnalyticsEmbedAPI } from './GoogleAnalyticsEmbedAPI';
/**
 * See documentation: https://react-use-analytics-api.netlify.app/useSignOut
 *
 * This hook returns a `signOut` function that can be used to sign the user out of Google Analytics via the [Google Analytics Embed API](https://react-use-analytics-api.netlify.app/useAnalyticsApi).
 *
 * @param gapi The [Google Analytics Embed API](https://react-use-analytics-api.netlify.app/useAnalyticsApi). When `undefined`, calling `signOut` does nothing.
 */
export declare const useSignOut: (gapi: GoogleAnalyticsEmbedAPI | undefined) => () => void;
