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
exports.Set = void 0;
const util = __importStar(require("./Utils"));
const arrays = __importStar(require("./Arrays"));
const Dictionary_1 = require("../Map/Dictionary");
/**
 * A collection that contains no duplicate elements.  More formally, sets
 * contain no pair of elements {@code e1} and {@code e2} such that
 * {@code e1.equals(e2)}, and at most one null element.  As implied by
 * its name, this interface models the mathematical <i>set</i> abstraction.
 */
class Set {
    /**
     * Dictionary key and value holds the elements in the set.
     * @type {Object}
     * @protected
     */
    dictionary;
    /**
     * Creates an empty set.
     * @class <p>A set is a data structure that contains no duplicate items.</p>
     * <p>If the inserted elements are custom objects a function
     * which converts elements to strings must be provided. Example:</p>
     *
     * <pre>
     * function petToString(pet) {
     *  return pet.name;
     * }
     * </pre>
     *
     * @constructor
     * @param {function(Object):string=} toStringFunction optional function used
     * to convert elements to strings. If the elements aren't strings or if toString()
     * is not appropriate, a custom function which receives an object and returns a
     * unique string must be provided.
     */
    constructor(toStringFunction) {
        this.dictionary = new Dictionary_1.Dictionary(toStringFunction);
    }
    /**
     * Returns true if this set contains the specified element.
     * @param {Object} element element to search for.
     * @return {boolean} true if this set contains the specified element,
     * false otherwise.
     */
    contains(element) {
        return this.dictionary.containsKey(element);
    }
    /**
     * Adds the specified element to this set if it is not already present.
     * @param {Object} element the element to insert.
     * @return {boolean} true if this set did not already contain the specified element.
     */
    add(element) {
        if (this.contains(element) || util.isUndefined(element)) {
            return false;
        }
        else {
            this.dictionary.setValue(element, element);
            return true;
        }
    }
    /**
     * Performs an intersection between this and another set.
     * Removes all values that are not present this set and the given set.
     * @param {collections.Set} otherSet other set.
     */
    intersection(otherSet) {
        const set = this;
        this.forEach(function (element) {
            if (!otherSet.contains(element)) {
                set.remove(element);
            }
            return true;
        });
    }
    /**
     * Performs a union between this and another set.
     * Adds all values from the given set to this set.
     * @param {collections.Set} otherSet other set.
     */
    union(otherSet) {
        const set = this;
        otherSet.forEach(function (element) {
            set.add(element);
            return true;
        });
    }
    /**
     * Performs a difference between this and another set.
     * Removes from this set all the values that are present in the given set.
     * @param {collections.Set} otherSet other set.
     */
    difference(otherSet) {
        const set = this;
        otherSet.forEach(function (element) {
            set.remove(element);
            return true;
        });
    }
    /**
     * Checks whether the given set contains all the elements in this set.
     * @param {collections.Set} otherSet other set.
     * @return {boolean} true if this set is a subset of the given set.
     */
    isSubsetOf(otherSet) {
        if (this.size() > otherSet.size()) {
            return false;
        }
        let isSub = true;
        this.forEach(function (element) {
            if (!otherSet.contains(element)) {
                isSub = false;
                return false;
            }
            return true;
        });
        return isSub;
    }
    /**
     * Removes the specified element from this set if it is present.
     * @return {boolean} true if this set contained the specified element.
     */
    remove(element) {
        if (!this.contains(element)) {
            return false;
        }
        else {
            this.dictionary.remove(element);
            return true;
        }
    }
    /**
     * Executes the provided function once for each element
     * present in this set.
     * @param {function(Object):*} callback function to execute, it is
     * invoked with one arguments: the element. To break the iteration you can
     * optionally return false.
     */
    forEach(callback) {
        this.dictionary.forEach(function (k, v) {
            return callback(v);
        });
    }
    /**
     * Returns an array containing all of the elements in this set in arbitrary order.
     * @return {Array} an array containing all of the elements in this set.
     */
    toArray() {
        return this.dictionary.values();
    }
    /**
     * Returns true if this set contains no elements.
     * @return {boolean} true if this set contains no elements.
     */
    isEmpty() {
        return this.dictionary.isEmpty();
    }
    /**
     * Returns the number of elements in this set.
     * @return {number} the number of elements in this set.
     */
    size() {
        return this.dictionary.size();
    }
    /**
     * Removes all of the elements from this set.
     */
    clear() {
        this.dictionary.clear();
    }
    /*
     * Provides a string representation for display
     */
    toString() {
        return arrays.toString(this.toArray());
    }
}
exports.Set = Set;
