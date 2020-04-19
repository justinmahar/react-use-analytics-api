import * as React from 'react';
import { GoogleAnalyticsEmbedAPI, ViewSelector } from './GoogleAnalyticsEmbedAPI';

/**
 * See documentation: https://devboldly.github.io/react-use-analytics-api/useViewSelector
 *
 * This hook renders a [ViewSelector](https://developers.google.com/analytics/devguides/reporting/embed/v1/component-reference#viewselector)
 * into a container on the page using the [Google Analytics Embed API](https://devboldly.github.io/react-use-analytics-api/useAnalyticsApi).
 *
 * The view selector can be used to change the Google Analytics view for data queries when [rendering charts](https://devboldly.github.io/react-use-analytics-api/useDataChart).
 *
 * @param gapi The [Google Analytics Embed API](https://devboldly.github.io/react-use-analytics-api/useAnalyticsApi). When `undefined`, nothing is rendered.
 * @param viewSelectorId The ID of the DOM element to render the view selector to.
 * @param onChange Called with the selected `viewId` whenever the view selection changes. Will be called immediately.
 */
export const useViewSelector = (
  gapi: GoogleAnalyticsEmbedAPI | undefined,
  viewSelectorId: string,
  onChange: (viewId: string) => void
): void => {
  const [viewSelector, setViewSelector] = React.useState<ViewSelector>();
  React.useEffect(() => {
    if (!viewSelector && typeof gapi !== 'undefined') {
      try {
        /**
         * Create a new ViewSelector instance to be rendered inside of an
         * element with the id provided.
         */
        const newViewSelector: ViewSelector = new gapi.analytics.ViewSelector({
          container: viewSelectorId,
        });

        // Render the view selector to the page.
        newViewSelector.execute();

        /**
         * Render the dataChart on the page whenever a new view is selected.
         */
        newViewSelector.on('change', function(viewId: string) {
          onChange(viewId);
        });

        setViewSelector(newViewSelector);
      } catch (e) {
        console.error(e);
      }
    }
  }, [viewSelector, viewSelectorId, onChange, gapi]);
};
