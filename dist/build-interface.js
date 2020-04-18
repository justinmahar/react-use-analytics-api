"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var excludedVariableNames = ['_'];
/**
 * Use this to create a TypeScript interface for the loaded Google Analytics Embed API object.
 *
 * @param obj The object to build a TS interface for.
 * @param interfaceName The name of the interface.
 */
exports.buildTypeScriptInterfaceFromObject = function (obj, interfaceName) {
    var result = "interface " + interfaceName + " {";
    if (typeof obj === 'object') {
        var keys = Object.keys(obj);
        keys.forEach(function (key) {
            result += buildTypeFromVariable(obj[key], key, excludedVariableNames) + ' ';
        });
    }
    result += '}';
    return result;
};
var buildTypeFromVariable = function (variable, name, excludedVars, depth, maxDepth) {
    if (excludedVars === void 0) { excludedVars = []; }
    if (depth === void 0) { depth = 0; }
    if (maxDepth === void 0) { maxDepth = 5; }
    var result = name + ": ";
    var typeofvariable = typeof variable;
    var keys;
    if (depth >= maxDepth) {
        result += 'any';
    }
    else {
        switch (typeofvariable) {
            case 'object':
                if (excludedVars.includes(name)) {
                    result += 'any';
                }
                else if (Array.isArray(variable)) {
                    result += 'any[]';
                }
                else if (variable !== null) {
                    result += '{';
                    keys = Object.keys(variable);
                    keys.forEach(function (key) {
                        result += buildTypeFromVariable(variable[key], key, excludedVars, depth + 1) + ' ';
                    });
                    result += '}';
                }
                else {
                    result += 'any';
                }
                break;
            case 'function':
                if (variable !== null) {
                    result += '(';
                    for (var i = 0; i < variable.length; i++) {
                        result += "arg" + i + ": any";
                        if (i < variable.length - 1) {
                            result += ', ';
                        }
                    }
                    result += ') => any';
                }
                else {
                    result += 'any';
                }
                break;
            default:
                result += typeofvariable;
        }
    }
    result += ';';
    return result;
};
