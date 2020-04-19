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
var useAnalyticsApi_1 = require("./useAnalyticsApi");
/**
 * See documentation: https://devboldly.github.io/react-use-analytics-api/useSignOut
 *
 * This hook returns a `signOut` function that can be used to sign the user out of Google Analytics via the [Google Analytics Embed API](https://devboldly.github.io/react-use-analytics-api/useAnalyticsApi).
 *
 * @param gapi The [Google Analytics Embed API](https://devboldly.github.io/react-use-analytics-api/useAnalyticsApi). When `undefined`, calling `signOut` does nothing.
 */
exports.useSignOut = function (gapi) {
    var _a = React.useState(false), run = _a[0], setRun = _a[1];
    React.useEffect(function () {
        var _a, _b;
        if (run) {
            setRun(false);
            (_b = (_a = gapi === null || gapi === void 0 ? void 0 : gapi.analytics) === null || _a === void 0 ? void 0 : _a.auth) === null || _b === void 0 ? void 0 : _b.signOut();
            useAnalyticsApi_1.apiSingleton.authorized = false;
            useAnalyticsApi_1.apiStateEmitter.emit('authorized', false);
        }
    }, [gapi, run]);
    var signOut = function () {
        if (!run) {
            setRun(true);
        }
    };
    return signOut;
};
