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
exports.Bag = void 0;
const util = __importStar(require("./Utils"));
const Dictionary_1 = require("../Map/Dictionary");
const Set_1 = require("./Set");
class Bag {
    toStrF;
    dictionary;
    nElements;
    /**
     * Creates an empty bag.
     * @class <p>A bag is a special kind of set in which members are
     * allowed to appear more than once.</p>
     * <p>If the inserted elements are custom objects a function
     * which converts elements to unique strings must be provided. Example:</p>
     *
     * <pre>
     * function petToString(pet) {
     *  return pet.name;
     * }
     * </pre>
     *
     * @constructor
     * @param {function(Object):string=} toStrFunction optional function used
     * to convert elements to strings. If the elements aren't strings or if toString()
     * is not appropriate, a custom function which receives an object and returns a
     * unique string must be provided.
     */
    constructor(toStrFunction) {
        this.toStrF = toStrFunction || util.defaultToString;
        this.dictionary = new Dictionary_1.Dictionary(this.toStrF);
        this.nElements = 0;
    }
    /**
     * Adds nCopies of the specified object to this bag.
     * @param {Object} element element to add.
     * @param {number=} nCopies the number of copies to add, if this argument is
     * undefined 1 copy is added.
     * @return {boolean} true unless element is undefined.
     */
    add(element, nCopies = 1) {
        if (util.isUndefined(element) || nCopies <= 0) {
            return false;
        }
        if (!this.contains(element)) {
            const node = {
                value: element,
                copies: nCopies,
            };
            this.dictionary.setValue(element, node);
        }
        else {
            this.dictionary.getValue(element).copies += nCopies;
        }
        this.nElements += nCopies;
        return true;
    }
    /**
     * Counts the number of copies of the specified object in this bag.
     * @param {Object} element the object to search for..
     * @return {number} the number of copies of the object, 0 if not found
     */
    count(element) {
        if (!this.contains(element)) {
            return 0;
        }
        else {
            return this.dictionary.getValue(element).copies;
        }
    }
    /**
     * Returns true if this bag contains the specified element.
     * @param {Object} element element to search for.
     * @return {boolean} true if this bag contains the specified element,
     * false otherwise.
     */
    contains(element) {
        return this.dictionary.containsKey(element);
    }
    /**
     * Removes nCopies of the specified object to this bag.
     * If the number of copies to remove is greater than the actual number
     * of copies in the Bag, all copies are removed.
     * @param {Object} element element to remove.
     * @param {number=} nCopies the number of copies to remove, if this argument is
     * undefined 1 copy is removed.
     * @return {boolean} true if at least 1 element was removed.
     */
    remove(element, nCopies = 1) {
        if (util.isUndefined(element) || nCopies <= 0) {
            return false;
        }
        if (!this.contains(element)) {
            return false;
        }
        else {
            const node = this.dictionary.getValue(element);
            if (nCopies > node.copies) {
                this.nElements -= node.copies;
            }
            else {
                this.nElements -= nCopies;
            }
            node.copies -= nCopies;
            if (node.copies <= 0) {
                this.dictionary.remove(element);
            }
            return true;
        }
    }
    /**
     * Returns an array containing all of the elements in this big in arbitrary order,
     * including multiple copies.
     * @return {Array} an array containing all of the elements in this bag.
     */
    toArray() {
        const a = [];
        const values = this.dictionary.values();
        for (const node of values) {
            const element = node.value;
            const copies = node.copies;
            for (let j = 0; j < copies; j++) {
                a.push(element);
            }
        }
        return a;
    }
    /**
     * Returns a set of unique elements in this bag.
     * @return {collections.Set<T>} a set of unique elements in this bag.
     */
    toSet() {
        const toret = new Set_1.Set(this.toStrF);
        const elements = this.dictionary.values();
        for (const ele of elements) {
            const value = ele.value;
            toret.add(value);
        }
        return toret;
    }
    /**
     * Executes the provided function once for each element
     * present in this bag, including multiple copies.
     * @param {function(Object):*} callback function to execute, it is
     * invoked with one argument: the element. To break the iteration you can
     * optionally return false.
     */
    forEach(callback) {
        this.dictionary.forEach(function (k, v) {
            const value = v.value;
            const copies = v.copies;
            for (let i = 0; i < copies; i++) {
                if (callback(value) === false) {
                    return false;
                }
            }
            return true;
        });
    }
    /**
     * Returns the number of elements in this bag.
     * @return {number} the number of elements in this bag.
     */
    size() {
        return this.nElements;
    }
    /**
     * Returns true if this bag contains no elements.
     * @return {boolean} true if this bag contains no elements.
     */
    isEmpty() {
        return this.nElements === 0;
    }
    /**
     * Removes all of the elements from this bag.
     */
    clear() {
        this.nElements = 0;
        this.dictionary.clear();
    }
}
exports.Bag = Bag;
