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
exports.useSignOut = void 0;
var React = __importStar(require("react"));
var useAnalyticsApi_1 = require("./useAnalyticsApi");
/**
 * See documentation: [useSignOut](https://justinmahar.github.io/react-use-analytics-api/useSignOut)
 *
 * This hook returns a `signOut` function that can be used to sign the user out of Google Analytics via the [Google Analytics Embed API](https://justinmahar.github.io/react-use-analytics-api/useAnalyticsApi).
 *
 * @param gapi The [Google Analytics Embed API](https://justinmahar.github.io/react-use-analytics-api/useAnalyticsApi). When `undefined`, calling `signOut` does nothing.
 */
exports.useSignOut = function (gapi) {
    var _a = React.useState(false), run = _a[0], setRun = _a[1];
    React.useEffect(function () {
        var _a, _b;
        if (typeof gapi !== 'undefined' && run) {
            setRun(false);
            (_b = (_a = gapi === null || gapi === void 0 ? void 0 : gapi.analytics) === null || _a === void 0 ? void 0 : _a.auth) === null || _b === void 0 ? void 0 : _b.signOut();
            useAnalyticsApi_1.apiSingleton.authorized = false;
            useAnalyticsApi_1.apiStateEmitter.emit(useAnalyticsApi_1.authorizedEvent, false);
        }
    }, [gapi, run]);
    var signOut = function () {
        if (typeof gapi !== 'undefined' && !run) {
            setRun(true);
        }
    };
    return signOut;
};
