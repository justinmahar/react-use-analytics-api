var __assign =
  (this && this.__assign) ||
  function() {
    __assign =
      Object.assign ||
      function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (const p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
    return __assign.apply(this, arguments);
  };
const __importStar =
  (this && this.__importStar) ||
  function(mod) {
    if (mod && mod.__esModule) return mod;
    const result = {};
    if (mod != null) for (const k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result['default'] = mod;
    return result;
  };
Object.defineProperty(exports, '__esModule', { value: true });
const React = __importStar(require('react'));
const useAnalyticsApi_1 = require('./useAnalyticsApi');
/**
 * See documentation: https://devboldly.github.io/react-use-analytics-api/useAuthorize
 *
 * The `useAuthorize` hook can be used to authorize the user via the [Google Analytics Embed API](https://devboldly.github.io/react-use-analytics-api/useAnalyticsApi) in several ways:
 * - Render an authorize button using a [Client ID](https://devboldly.github.io/react-analytics-charts/google-oauth-client-id)
 * - Authorize with an [access token](https://ga-dev-tools.appspot.com/embed-api/server-side-authorization/)
 *
 * The user must be authorized before the API can query for things like chart data.
 *
 * @param gapi The [Google Analytics Embed API](https://devboldly.github.io/react-use-analytics-api/useAnalyticsApi). When `undefined`, calling `authorize` does nothing.
 * @param options The [options](https://developers.google.com/analytics/devguides/reporting/embed/v1/component-reference#auth-options) for the authorization.
 * @param onSignIn Called on a successful sign-in. You can use this to do things like change the view on auth success.
 */
exports.useAuthorize = function(gapi, options, onSignIn) {
  const _a = React.useState(useAnalyticsApi_1.apiSingleton.authorized),
    authorized = _a[0],
    setAuthorized = _a[1];
  const _b = React.useState(false),
    run = _b[0],
    setRun = _b[1];
  React.useEffect(function() {
    let aborted = false;
    const authorizedListener = function(isAuthorized) {
      if (!aborted) {
        setAuthorized(isAuthorized);
      }
    };
    useAnalyticsApi_1.apiStateEmitter.on('authorized', authorizedListener);
    return function() {
      aborted = true;
      useAnalyticsApi_1.apiStateEmitter.off('authorized', authorizedListener);
    };
  });
  React.useEffect(
    function() {
      if (run) {
        setRun(false);
        if (typeof gapi !== 'undefined') {
          const signInHandler = function() {
            if (!authorized) {
              setAuthorized(true);
            }
            useAnalyticsApi_1.apiSingleton.authorized = true;
            useAnalyticsApi_1.apiStateEmitter.emit('authorized', true);
            if (typeof onSignIn !== 'undefined') {
              onSignIn();
            }
          };
          gapi.analytics.auth.on('signIn', signInHandler);
          gapi.analytics.auth.authorize(
            __assign(
              {
                // There seems to be a typo in the official spec docs (clientId vs clientid)
                // So we'll include both. ¯\_(ツ)_/¯
                clientid: options.clientId,
              },
              options
            )
          );
        }
      }
    },
    [run, gapi, options, authorized, onSignIn, setRun, setAuthorized]
  );
  const authorize = function() {
    setRun(true);
  };
  return authorize;
};
