import * as React from 'react';
import { GoogleAnalyticsEmbedAPI } from './GoogleAnalyticsEmbedAPI';
import { apiSingleton, apiStateEmitter } from './useAnalyticsApi';

/**
 * See documentation: https://react-use-analytics-api.netlify.app/useSignOut
 *
 * This hook returns a `signOut` function that can be used to sign the user out of Google Analytics via the [Google Analytics Embed API](https://react-use-analytics-api.netlify.app/useAnalyticsApi).
 *
 * @param gapi The [Google Analytics Embed API](https://react-use-analytics-api.netlify.app/useAnalyticsApi). When `undefined`, calling `signOut` does nothing.
 */
export const useSignOut = (gapi: GoogleAnalyticsEmbedAPI | undefined): (() => void) => {
  const [run, setRun] = React.useState(false);

  React.useEffect(() => {
    if (run) {
      setRun(false);
      gapi?.analytics?.auth?.signOut();
      apiSingleton.authorized = false;
      apiStateEmitter.emit('authorized', false);
    }
  }, [gapi, run]);

  const signOut = (): void => {
    if (!run) {
      setRun(true);
    }
  };

  return signOut;
};
