"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BinarySearchTree = void 0;
const BinarySearchTreeKV_1 = require("./BinarySearchTreeKV");
/**
 * Special-case of the binary search tree in which the search key is equal to the element type.
 * This definition is suitable when the element type can not be split between what defines its order
 * and what does not (eg. primitive types as opposed to indexed records).
 *
 * The table below shows some use-case examples for both interfaces:
 *
 *           element type              |  most suitable interface
 * ------------------------------------|----------------------------
 *    number                           |  BSTree<number>
 *    string                           |  BSTree<string>
 * { order: number, data: string }     |  BinarySearchTreeKV<{order: number}, {order: number, data: string}>
 *
 * @see BinarySearchTreeKV
 */
class BinarySearchTree extends BinarySearchTreeKV_1.BinarySearchTreeKV {
}
exports.BinarySearchTree = BinarySearchTree;