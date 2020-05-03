import * as React from 'react';
import { GoogleAnalyticsEmbedAPI, Query } from './GoogleAnalyticsEmbedAPI';
import { apiSingleton, apiStateEmitter, authorizedEvent } from './useAnalyticsApi';

/**
 * See documentation: [useData](https://devboldly.github.io/react-use-analytics-api/useData)
 *
 * This hook returns a `signOut` function that can be used to sign the user out of Google Analytics via the [Google Analytics Embed API](https://devboldly.github.io/react-use-analytics-api/useAnalyticsApi).
 *
 * @param gapi The [Google Analytics Embed API](https://devboldly.github.io/react-use-analytics-api/useAnalyticsApi). When `undefined`, calling `signOut` does nothing.
 * @param query The data [query](https://developers.google.com/analytics/devguides/reporting/core/v3/reference#q_summary) for the chart.
 * @param onSuccess https://developers.google.com/analytics/devguides/reporting/embed/v1/component-reference#data
 * @param onError
 */
export const useData = (
  gapi: GoogleAnalyticsEmbedAPI | undefined,
  query: Query,
  onSuccess: (response: any) => void = () => undefined,
  onError: (response: any) => void = () => undefined
): (() => void) => {
  const [run, setRun] = React.useState(false);

  React.useEffect(() => {
    if (typeof gapi !== 'undefined' && run) {
      setRun(false);
      const report = new gapi.analytics.report.Data({ query });
      report.on('success', onSuccess);
      report.on('error', onError);
      report.execute();
    }
  }, [gapi, onError, onSuccess, query, run]);

  const execute = React.useCallback((): void => {
    if (typeof gapi !== 'undefined') {
      setRun(true);
    }
  }, [gapi]);

  return execute;
};
