"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
/**
 * See documentation: [useDataChart](https://devboldly.github.io/react-use-analytics-api/useDataChart)
 *
 * This hook renders a [DataChart](https://developers.google.com/analytics/devguides/reporting/embed/v1/component-reference#datachart) on the page using the [Google Analytics Embed API](https://devboldly.github.io/react-use-analytics-api/useAnalyticsApi).
 *
 * @param gapi  The [Google Analytics Embed API](https://devboldly.github.io/react-use-analytics-api/useAnalyticsApi). When `undefined`, this hook does nothing.
 * @param query The data [query](https://developers.google.com/analytics/devguides/reporting/core/v3/reference#q_summary) for the chart.
 * @param chart The [chart](https://developers.google.com/analytics/devguides/reporting/embed/v1/component-reference#datachart) to render. This determines its appearance.
 */
exports.useDataChart = function (gapi, query, chart) {
    var _a = React.useState(), dataChart = _a[0], setDataChart = _a[1];
    React.useEffect(function () {
        if (typeof gapi !== 'undefined') {
            if (!dataChart) {
                if (query.ids) {
                    try {
                        var newChart = new gapi.analytics.googleCharts.DataChart({
                            query: query,
                            chart: chart,
                        });
                        setDataChart(newChart);
                    }
                    catch (e) {
                        console.error(e);
                    }
                }
            }
            else {
                dataChart.set({ query: query }).execute();
            }
        }
    }, [dataChart, query, chart, gapi]);
};
