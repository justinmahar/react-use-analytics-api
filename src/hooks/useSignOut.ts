import * as React from 'react';
import { GoogleAnalyticsEmbedAPI } from './GoogleAnalyticsEmbedAPI';
import { apiSingleton, apiStateEmitter, authorizedEvent } from './useAnalyticsApi';

/**
 * See documentation: https://devboldly.github.io/react-use-analytics-api/useSignOut
 *
 * This hook returns a `signOut` function that can be used to sign the user out of Google Analytics via the [Google Analytics Embed API](https://devboldly.github.io/react-use-analytics-api/useAnalyticsApi).
 *
 * @param gapi The [Google Analytics Embed API](https://devboldly.github.io/react-use-analytics-api/useAnalyticsApi). When `undefined`, calling `signOut` does nothing.
 */
export const useSignOut = (gapi: GoogleAnalyticsEmbedAPI | undefined): (() => void) => {
  const [run, setRun] = React.useState(false);

  React.useEffect(() => {
    if (typeof gapi !== 'undefined' && run) {
      setRun(false);
      gapi?.analytics?.auth?.signOut();
      apiSingleton.authorized = false;
      apiStateEmitter.emit(authorizedEvent, false);
    }
  }, [gapi, run]);

  const signOut = (): void => {
    if (typeof gapi !== 'undefined' && !run) {
      setRun(true);
    }
  };

  return signOut;
};
