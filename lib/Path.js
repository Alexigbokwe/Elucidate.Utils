"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Path = void 0;
const RootDirectory_1 = require("./RootDirectory");
const Path = (location) => {
    return `${RootDirectory_1.projectDirectory}/${location}`;
};
exports.Path = Path;
