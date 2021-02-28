"use strict";
var __importStar =
  (this && this.__importStar) ||
  function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null)
      for (var k in mod)
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
  };
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
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
exports.useData = function (gapi, query, onSuccess, onError) {
  if (onSuccess === void 0) {
    onSuccess = function () {
      return undefined;
    };
  }
  if (onError === void 0) {
    onError = function () {
      return undefined;
    };
  }
  var _a = React.useState(false),
    run = _a[0],
    setRun = _a[1];
  React.useEffect(
    function () {
      if (typeof gapi !== "undefined" && run) {
        setRun(false);
        var report = new gapi.analytics.report.Data({ query: query });
        report.on("success", onSuccess);
        report.on("error", onError);
        report.execute();
      }
    },
    [gapi, onError, onSuccess, query, run]
  );
  var execute = React.useCallback(
    function () {
      if (typeof gapi !== "undefined") {
        setRun(true);
      }
    },
    [gapi]
  );
  return execute;
};
