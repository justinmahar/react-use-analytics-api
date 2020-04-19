"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var events_1 = require("events");
var React = __importStar(require("react"));
/**
 * Contains `gapi` and tracks whether the script was requested and if we're authorized.
 *
 * - `scriptRequested` - Type: boolean - False when the script has not been requested yet. True otherwise (script is loading).
 * - `authorized` - Type: boolean - True when authorized, false otherwise.
 * - `gapi` - Type: [GoogleAnalyticsEmbedAPI](https://developers.google.com/analytics/devguides/reporting/embed/v1) &#124; undefined - The API, or undefined if it's not loaded and ready.
 */
exports.apiSingleton = {
    scriptRequested: false,
    authorized: false,
    gapi: undefined,
};
// Check if we have it loaded and ready, and set singleton up.
if (typeof window !== 'undefined') {
    var win = window;
    if (win.gapi && win.gapi.analytics) {
        // At this point, we've requested the script, but it may not be fully loaded yet.
        exports.apiSingleton.scriptRequested = true;
        // If we've fully loaded it (all dependencies we need are present), set it.
        exports.apiSingleton.gapi =
            !!win.gapi.analytics.ViewSelector && !!win.gapi.analytics.auth && !!((_a = win.gapi.analytics) === null || _a === void 0 ? void 0 : _a.googleCharts.DataChart)
                ? win.gapi
                : undefined;
        // Set whether we're authorized
        exports.apiSingleton.authorized = win.gapi.analytics.auth ? win.gapi.analytics.auth.isAuthorized() : false;
    }
}
/**
 * Used to keep hooks synchronized.
 *
 * Events:
 * - on `authorized` - `(isAuthorized) => void` - The user is signed in or signed out.
 * - on `ready` - `() => void` - The API is loaded and ready.
 */
exports.apiStateEmitter = new events_1.EventEmitter();
/**
 * See documentation: https://devboldly.github.io/react-use-analytics-api/useAnalyticsApi
 *
 *  Use this hook to load and access the [Google Analytics Embed API](https://ga-dev-tools.appspot.com/embed-api/) (`gapi`).
 *
 * The hook will run the [library loading script from Google](https://developers.google.com/analytics/devguides/reporting/embed/v1/getting-started#step-2), grab the API out from `window.gapi` (where Google loads it to), and store it as a singleton.
 * It will reference the singleton thereafter, keeping `window` interaction to a minimum.
 *
 * State changes that happen outside of React (such as API readiness and [authorization](https://devboldly.github.io/react-use-analytics-api/useAuthorize)) are synchronized across all hooks via a singleton emitter effect. This allows you to use the hook in multiple places while keeping them all in sync.
 */
exports.useAnalyticsApi = function () {
    var _a = React.useState(exports.apiSingleton.gapi), gapi = _a[0], setGapi = _a[1];
    var _b = React.useState(typeof exports.apiSingleton.gapi !== 'undefined'), hookReady = _b[0], setHookReady = _b[1];
    var _c = React.useState(exports.apiSingleton.authorized), authorized = _c[0], setAuthorized = _c[1];
    var _d = React.useState(undefined), error = _d[0], setError = _d[1];
    React.useEffect(function () {
        var aborted = false;
        var authorizedListener = function (isAuthorized) {
            if (!aborted) {
                setAuthorized(isAuthorized);
            }
        };
        exports.apiStateEmitter.on('authorized', authorizedListener);
        var readyListener = function () {
            if (!aborted) {
                setGapi(exports.apiSingleton.gapi);
                setHookReady(true);
            }
        };
        exports.apiStateEmitter.on('ready', readyListener);
        return function () {
            aborted = true;
            exports.apiStateEmitter.off('authorized', authorizedListener);
            exports.apiStateEmitter.off('ready', readyListener);
        };
    });
    React.useEffect(function () {
        try {
            if (typeof window !== 'undefined') {
                var win_1 = window;
                // Only load the script once.
                if (!exports.apiSingleton.scriptRequested) {
                    exports.apiSingleton.scriptRequested = true;
                    // Call the code from Google to load the API into window.
                    loadGoogleApi();
                    // At this point, gapi has been partially loaded into window.
                    // We're still loading analytics. Google adds an emitter
                    // called ready() that will fire when it's fully loaded.
                    if (win_1.gapi && win_1.gapi.analytics && win_1.gapi.analytics.ready) {
                        win_1.gapi.analytics.ready(function () {
                            // At this point, we can use the Analytics Embed API!
                            exports.apiSingleton.gapi = win_1.gapi;
                            // Set if we're already authorized
                            if (win_1.gapi.analytics.auth.isAuthorized()) {
                                exports.apiSingleton.authorized = true;
                            }
                            // Update the hook's state
                            setGapi(exports.apiSingleton.gapi);
                            setHookReady(true);
                            setAuthorized(exports.apiSingleton.authorized);
                            // This hook is ready, but we need to update other hooks subscribed
                            // to the singleton emitter
                            exports.apiStateEmitter.emit('ready');
                            exports.apiStateEmitter.emit('authorized', exports.apiSingleton.authorized);
                        });
                    }
                    else {
                        throw new Error("Couldn't add ready listener to gapi analytics.");
                    }
                }
            }
        }
        catch (e) {
            setError(e);
        }
    }, [setAuthorized]);
    return { ready: hookReady, gapi: gapi, error: error, authorized: !!authorized };
};
/**
 * Ported to TypeScript from:
 * https://developers.google.com/analytics/devguides/reporting/embed/v1/getting-started#step-2
 */
var loadGoogleApi = function () {
    if (typeof window !== 'undefined') {
        (function (w, d, s) {
            var g = w.gapi || (w.gapi = {});
            g.analytics = {
                q: [],
                ready: function (cb) {
                    this.q.push(cb);
                },
            };
            var js = d.createElement(s);
            var fjs = d.getElementsByTagName(s)[0];
            js.src = 'https://apis.google.com/js/platform.js';
            fjs.parentNode.insertBefore(js, fjs);
            js.onload = function () {
                g.load('analytics');
            };
        })(window, document, 'script');
    }
};
