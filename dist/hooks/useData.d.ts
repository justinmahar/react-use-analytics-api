import { GoogleAnalyticsEmbedAPI, Query } from './GoogleAnalyticsEmbedAPI';
/**
 * See documentation: [useData](https://justinmahar.github.io/react-use-analytics-api/useData)
 *
 * This hook returns a `signOut` function that can be used to sign the user out of Google Analytics via the [Google Analytics Embed API](https://justinmahar.github.io/react-use-analytics-api/useAnalyticsApi).
 *
 * @param gapi The [Google Analytics Embed API](https://justinmahar.github.io/react-use-analytics-api/useAnalyticsApi). When `undefined`, calling `signOut` does nothing.
 * @param query The data [query](https://developers.google.com/analytics/devguides/reporting/core/v3/reference#q_summary) for the chart.
 * @param onSuccess https://developers.google.com/analytics/devguides/reporting/embed/v1/component-reference#data
 * @param onError
 */
export declare const useData: (gapi: GoogleAnalyticsEmbedAPI | undefined, query: Query, onSuccess?: (response: any) => void, onError?: (response: any) => void) => () => void;
