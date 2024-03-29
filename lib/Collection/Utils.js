"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compareToEquals = exports.reverseCompareFunction = exports.isString = exports.isUndefined = exports.isFunction = exports.makeString = exports.defaultToString = exports.defaultEquals = exports.defaultCompare = exports.has = void 0;
const _hasOwnProperty = Object.prototype.hasOwnProperty;
const has = function (obj, prop) {
    return _hasOwnProperty.call(obj, prop);
};
exports.has = has;
/**
 * Default function to compare element order.
 * @function
 */
function defaultCompare(a, b) {
    if (a < b) {
        return -1;
    }
    else if (a === b) {
        return 0;
    }
    else {
        return 1;
    }
}
exports.defaultCompare = defaultCompare;
/**
 * Default function to test equality.
 * @function
 */
function defaultEquals(a, b) {
    return a === b;
}
exports.defaultEquals = defaultEquals;
/**
 * Default function to convert an object to a string.
 * @function
 */
function defaultToString(item) {
    if (item === null) {
        return "COLLECTION_NULL";
    }
    else if (isUndefined(item)) {
        return "COLLECTION_UNDEFINED";
    }
    else if (isString(item)) {
        return "$s" + item;
    }
    else {
        return "$o" + item.toString();
    }
}
exports.defaultToString = defaultToString;
/**
 * Joins all the properies of the object using the provided join string
 */
function makeString(item, join = ",") {
    if (item === null) {
        return "COLLECTION_NULL";
    }
    else if (isUndefined(item)) {
        return "COLLECTION_UNDEFINED";
    }
    else if (isString(item)) {
        return item.toString();
    }
    else {
        let toret = "{";
        let first = true;
        for (const prop in item) {
            if ((0, exports.has)(item, prop)) {
                if (first) {
                    first = false;
                }
                else {
                    toret = toret + join;
                }
                toret = toret + prop + ":" + item[prop];
            }
        }
        return toret + "}";
    }
}
exports.makeString = makeString;
/**
 * Checks if the given argument is a function.
 * @function
 */
function isFunction(func) {
    return typeof func === "function";
}
exports.isFunction = isFunction;
/**
 * Checks if the given argument is undefined.
 * @function
 */
function isUndefined(obj) {
    return typeof obj === "undefined";
}
exports.isUndefined = isUndefined;
/**
 * Checks if the given argument is a string.
 * @function
 */
function isString(obj) {
    return Object.prototype.toString.call(obj) === "[object String]";
}
exports.isString = isString;
/**
 * Reverses a compare function.
 * @function
 */
function reverseCompareFunction(compareFunction) {
    if (isUndefined(compareFunction) || !isFunction(compareFunction)) {
        return function (a, b) {
            if (a < b) {
                return 1;
            }
            else if (a === b) {
                return 0;
            }
            else {
                return -1;
            }
        };
    }
    else {
        return function (d, v) {
            return compareFunction(d, v) * -1;
        };
    }
}
exports.reverseCompareFunction = reverseCompareFunction;
/**
 * Returns an equal function given a compare function.
 * @function
 */
function compareToEquals(compareFunction) {
    return function (a, b) {
        return compareFunction(a, b) === 0;
    };
}
exports.compareToEquals = compareToEquals;
