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
exports.ObjectHasProperty = exports.ReverseCompareFunction = exports.MakeString = exports.IsUndefined = exports.IsString = exports.IsFunction = exports.ConvertToString = exports.IsEquals = exports.CompareElementOrder = exports.CompareToEquals = exports.Path = exports.Group = exports.FirstCharacterToLowerCase = exports.Optional = exports.ObjectMapper = exports.Bag = exports.Heap = exports.LinkedList = exports.LinkedDictionary = exports.List = exports.MultiRootTree = exports.MultiDictionary = exports.PriorityQueue = exports.Queue = exports.Stack = exports.Set = exports.BinarySearchTree = exports.BinarySearchTreeKV = void 0;
const util = __importStar(require("./Collection/Utils"));
var BinarySearchTreeKV_1 = require("./BinarySearch/BinarySearchTreeKV");
Object.defineProperty(exports, "BinarySearchTreeKV", { enumerable: true, get: function () { return BinarySearchTreeKV_1.BinarySearchTreeKV; } });
var BinarySearchTree_1 = require("./BinarySearch/BinarySearchTree");
Object.defineProperty(exports, "BinarySearchTree", { enumerable: true, get: function () { return BinarySearchTree_1.BinarySearchTree; } });
var Set_1 = require("./Collection/Set");
Object.defineProperty(exports, "Set", { enumerable: true, get: function () { return Set_1.Set; } });
var Stack_1 = require("./Collection/Stack");
Object.defineProperty(exports, "Stack", { enumerable: true, get: function () { return Stack_1.Stack; } });
var Queue_1 = require("./Collection/Queue");
Object.defineProperty(exports, "Queue", { enumerable: true, get: function () { return Queue_1.Queue; } });
var PriorityQueue_1 = require("./Collection/PriorityQueue");
Object.defineProperty(exports, "PriorityQueue", { enumerable: true, get: function () { return PriorityQueue_1.PriorityQueue; } });
var MultiDictionary_1 = require("./Map/MultiDictionary");
Object.defineProperty(exports, "MultiDictionary", { enumerable: true, get: function () { return MultiDictionary_1.MultiDictionary; } });
var MultiRootTree_1 = require("./Collection/MultiRootTree");
Object.defineProperty(exports, "MultiRootTree", { enumerable: true, get: function () { return MultiRootTree_1.MultiRootTree; } });
var List_1 = require("./Collection/List");
Object.defineProperty(exports, "List", { enumerable: true, get: function () { return List_1.List; } });
var LinkedDictionary_1 = require("./Map/LinkedDictionary");
Object.defineProperty(exports, "LinkedDictionary", { enumerable: true, get: function () { return LinkedDictionary_1.LinkedDictionary; } });
var LinkedList_1 = require("./Collection/LinkedList");
Object.defineProperty(exports, "LinkedList", { enumerable: true, get: function () { return LinkedList_1.LinkedList; } });
var Heap_1 = require("./Collection/Heap");
Object.defineProperty(exports, "Heap", { enumerable: true, get: function () { return Heap_1.Heap; } });
var Bag_1 = require("./Collection/Bag");
Object.defineProperty(exports, "Bag", { enumerable: true, get: function () { return Bag_1.Bag; } });
var ObjectMapper_1 = require("./ObjectMapper");
Object.defineProperty(exports, "ObjectMapper", { enumerable: true, get: function () { return ObjectMapper_1.ObjectMapper; } });
var Optional_1 = require("./Optional");
Object.defineProperty(exports, "Optional", { enumerable: true, get: function () { return Optional_1.Optional; } });
var FirstCharacterToLowerCase_1 = require("./FirstCharacterToLowerCase");
Object.defineProperty(exports, "FirstCharacterToLowerCase", { enumerable: true, get: function () { return FirstCharacterToLowerCase_1.convertFirstCharacterToLowerCase; } });
var Group_1 = require("./Group");
Object.defineProperty(exports, "Group", { enumerable: true, get: function () { return Group_1.Group; } });
var Path_1 = require("./Path");
Object.defineProperty(exports, "Path", { enumerable: true, get: function () { return Path_1.Path; } });
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
exports.ObjectHasProperty = ObjectHasProperty;
const CompareToEquals = util.compareToEquals;
exports.CompareToEquals = CompareToEquals;
const CompareElementOrder = util.defaultCompare;
exports.CompareElementOrder = CompareElementOrder;
const IsEquals = util.defaultEquals;
exports.IsEquals = IsEquals;
const ConvertToString = util.defaultToString;
exports.ConvertToString = ConvertToString;
const IsFunction = util.isFunction;
exports.IsFunction = IsFunction;
const IsString = util.isString;
exports.IsString = IsString;
const IsUndefined = util.isUndefined;
exports.IsUndefined = IsUndefined;
const MakeString = util.makeString;
exports.MakeString = MakeString;
const ReverseCompareFunction = util.reverseCompareFunction;
exports.ReverseCompareFunction = ReverseCompareFunction;
