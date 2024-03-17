"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
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
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FactoryDictionary = void 0;
const Dictionary_1 = require("./Dictionary");
const util = __importStar(require("../Collection/Utils"));
class FactoryDictionary extends Dictionary_1.Dictionary {
    /**
     * Factory to create default values.
     * @type {function(Object):string}
     * @protected
     */
    defaultFactoryFunction;
    /**
     * Creates an empty dictionary.
     * @class <p>Dictionaries map keys to values; each key can map to at most one value.
     * This implementation accepts any kind of objects as keys.</p>
     *
     * <p>The default factory function should return a new object of the provided
     * type. Example:</p>
     * <pre>
     * function petFactory() {
     *  return new Pet();
     * }
     * </pre>
     *
     * <p>If the keys are custom objects a function which converts keys to unique
     * strings must be provided. Example:</p>
     * <pre>
     * function petToString(pet) {
     *  return pet.name;
     * }
     * </pre>
     * @constructor
     * @param {function():V=} defaultFactoryFunction function used to create a
     * default object.
     * @param {function(Object):string=} toStrFunction optional function used
     * to convert keys to strings. If the keys aren't strings or if toString()
     * is not appropriate, a custom function which receives a key and returns a
     * unique string must be provided.
     */
    constructor(defaultFactoryFunction, toStrFunction) {
        super(toStrFunction);
        this.defaultFactoryFunction = defaultFactoryFunction;
    }
    /**
     * Associates the specified default value with the specified key in this dictionary,
     * if it didn't contain the key yet. If the key existed, the existing value will be used.
     * @param {Object} key key with which the specified value is to be
     * associated.
     * @param {Object} defaultValue default value to be associated with the specified key.
     * @return {*} previous value associated with the specified key, or the default value,
     * if the key didn't exist yet.
     */
    setDefault(key, defaultValue) {
        const currentValue = super.getValue(key);
        if (util.isUndefined(currentValue)) {
            this.setValue(key, defaultValue);
            return defaultValue;
        }
        return currentValue;
    }
    /**
     * Returns the value to which this dictionary maps the specified key.
     * Returns a default value created by the factory passed in the constructor,
     * if this dictionary contains no mapping for this key. The missing key will
     * automatically be added to the dictionary.
     * @param {Object} key key whose associated value is to be returned.
     * @return {*} the value to which this dictionary maps the specified key or
     * a default value if the map contains no mapping for this key.
     */
    getValue(key) {
        return this.setDefault(key, this.defaultFactoryFunction());
    }
}
exports.FactoryDictionary = FactoryDictionary;
