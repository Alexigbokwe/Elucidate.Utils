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
declare const ObjectHasProperty: (obj: any, prop: any) => any;
declare const CompareToEquals: typeof util.compareToEquals;
declare const CompareElementOrder: typeof util.defaultCompare;
declare const IsEquals: typeof util.defaultEquals;
declare const ConvertToString: typeof util.defaultToString;
declare const IsFunction: typeof util.isFunction;
declare const IsString: typeof util.isString;
declare const IsUndefined: typeof util.isUndefined;
declare const MakeString: typeof util.makeString;
declare const ReverseCompareFunction: typeof util.reverseCompareFunction;
export { CompareToEquals, CompareElementOrder, IsEquals, ConvertToString, IsFunction, IsString, IsUndefined, MakeString, ReverseCompareFunction, ObjectHasProperty };
//# sourceMappingURL=index.d.ts.map