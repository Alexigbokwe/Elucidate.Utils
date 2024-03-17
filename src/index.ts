import * as util from "./Collection/Utils";
export { BinarySearchTreeKV } from "./BinarySearch/BinarySearchTreeKV";
export { BinarySearchTree } from "./BinarySearch/BinarySearchTree";
export { Set } from "./Collection/Set";
export { Stack } from "./Collection/Stack";
export { Queue } from "./Collection/Queue";
export { PriorityQueue } from "./Collection/PriorityQueue";
export { MultiDictionary } from "./Map/MultiDictionary";
export { MultiRootTree } from "./Collection/MultiRootTree";
export { List } from "./Collection/List";
export { LinkedDictionary } from "./Map/LinkedDictionary";
export { LinkedList } from "./Collection/LinkedList";
export { Heap } from "./Collection/Heap";
export { Bag } from "./Collection/Bag";
export { ObjectMapper } from "./ObjectMapper";
export { Optional } from "./Optional";
export { convertFirstCharacterToLowerCase as FirstCharacterToLowerCase } from "./FirstCharacterToLowerCase";
export { Group } from "./Group";
export { Path } from "./Path";

/**
 * ExpressWebJs.util.ObjectHasProperty(object,property)
 * ________________________________________________________
 * Checks if an object has a property
 * @Returns true if object has property, otherwise false
 * @Params {Object} object
 * @Params {String} property
 * @Since ExpressWebJs version 4
 */
const ObjectHasProperty = util.has;
const CompareToEquals = util.compareToEquals;
const CompareElementOrder = util.defaultCompare;
const IsEquals = util.defaultEquals;
const ConvertToString = util.defaultToString;
const IsFunction = util.isFunction;
const IsString = util.isString;
const IsUndefined = util.isUndefined;
const MakeString = util.makeString;
const ReverseCompareFunction = util.reverseCompareFunction;

export { CompareToEquals, CompareElementOrder, IsEquals, ConvertToString, IsFunction, IsString, IsUndefined, MakeString, ReverseCompareFunction, ObjectHasProperty };
