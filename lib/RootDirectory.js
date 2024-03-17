"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.projectDirectory = void 0;
const path_1 = __importDefault(require("path"));
exports.projectDirectory = path_1.default.dirname(process.argv[1]).split("/node_modules")[0];
