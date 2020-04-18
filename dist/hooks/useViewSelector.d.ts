import { GoogleAnalyticsEmbedAPI } from './GoogleAnalyticsEmbedAPI';
/**
 * See documentation: https://react-use-analytics-api.netlify.app/useViewSelector
 *
 * This hook renders a [ViewSelector](https://developers.google.com/analytics/devguides/reporting/embed/v1/component-reference#viewselector)
 * into a container on the page using the [Google Analytics Embed API](https://react-use-analytics-api.netlify.app/useAnalyticsApi).
 *
 * The view selector can be used to change the Google Analytics view for data queries when [rendering charts](https://react-use-analytics-api.netlify.app/useDataChart).
 *
 * @param gapi The [Google Analytics Embed API](https://react-use-analytics-api.netlify.app/useAnalyticsApi). When `undefined`, nothing is rendered.
 * @param viewSelectorId The ID of the DOM element to render the view selector to.
 * @param onChange Called with the selected `viewId` whenever the view selection changes. Will be called immediately.
 */
export declare const useViewSelector: (gapi: GoogleAnalyticsEmbedAPI | undefined, viewSelectorId: string, onChange: (viewId: string) => void) => void;
