import { GoogleAnalyticsEmbedAPI } from './GoogleAnalyticsEmbedAPI';
/**
 * See documentation: [useSignOut](https://devboldly.github.io/react-use-analytics-api/useSignOut)
 *
 * This hook returns a `signOut` function that can be used to sign the user out of Google Analytics via the [Google Analytics Embed API](https://devboldly.github.io/react-use-analytics-api/useAnalyticsApi).
 *
 * @param gapi The [Google Analytics Embed API](https://devboldly.github.io/react-use-analytics-api/useAnalyticsApi). When `undefined`, calling `signOut` does nothing.
 */
export declare const useSignOut: (gapi: GoogleAnalyticsEmbedAPI | undefined) => () => void;
