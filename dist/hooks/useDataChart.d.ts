import { GoogleAnalyticsEmbedAPI } from './GoogleAnalyticsEmbedAPI';
/**
 * See documentation: https://devboldly.github.io/react-use-analytics-api/useDataChart
 *
 * This hook renders a [DataChart](https://developers.google.com/analytics/devguides/reporting/embed/v1/component-reference#datachart) on the page using the [Google Analytics Embed API](https://devboldly.github.io/react-use-analytics-api/useAnalyticsApi).
 *
 * @param gapi  The [Google Analytics Embed API](https://devboldly.github.io/react-use-analytics-api/useAnalyticsApi). When `undefined`, this hook does nothing.
 * @param query The data [query](https://developers.google.com/analytics/devguides/reporting/core/v3/reference#q_summary) for the chart.
 * @param chart The [chart](https://developers.google.com/analytics/devguides/reporting/embed/v1/component-reference#datachart) to render. This determines its appearance.
 */
export declare const useDataChart: (gapi: GoogleAnalyticsEmbedAPI | undefined, query: any, chart: any) => void;
