"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useViewSelector = void 0;
var React = __importStar(require("react"));
/**
 * See documentation: [useViewSelector](https://justinmahar.github.io/react-use-analytics-api/useViewSelector)
 *
 * This hook renders a [ViewSelector](https://developers.google.com/analytics/devguides/reporting/embed/v1/component-reference#viewselector)
 * into a container on the page using the [Google Analytics Embed API](https://justinmahar.github.io/react-use-analytics-api/useAnalyticsApi).
 *
 * The view selector can be used to change the Google Analytics view for data queries when [rendering charts](https://justinmahar.github.io/react-use-analytics-api/useDataChart).
 *
 * @param gapi The [Google Analytics Embed API](https://justinmahar.github.io/react-use-analytics-api/useAnalyticsApi). When `undefined`, nothing is rendered.
 * @param viewSelectorId The ID of the DOM element to render the view selector to.
 * @param onChange Called with the selected `viewId` whenever the view selection changes. Will be called immediately.
 */
exports.useViewSelector = function (gapi, viewSelectorId, onChange) {
    var _a = React.useState(), viewSelector = _a[0], setViewSelector = _a[1];
    React.useEffect(function () {
        if (!viewSelector && typeof gapi !== 'undefined') {
            try {
                /**
                 * Create a new ViewSelector instance to be rendered inside of an
                 * element with the id provided.
                 */
                var newViewSelector = new gapi.analytics.ViewSelector({
                    container: viewSelectorId,
                });
                // Render the view selector to the page.
                newViewSelector.execute();
                /**
                 * Render the dataChart on the page whenever a new view is selected.
                 */
                newViewSelector.on('change', function (viewId) {
                    if (onChange) {
                        onChange(viewId);
                    }
                });
                setViewSelector(newViewSelector);
            }
            catch (e) {
                console.error(e);
            }
        }
    }, [viewSelector, viewSelectorId, onChange, gapi]);
};
