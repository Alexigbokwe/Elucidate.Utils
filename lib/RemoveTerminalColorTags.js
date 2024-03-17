"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoveTerminalColorTags = void 0;
const RemoveTerminalColorTags = (input) => {
    const colorRegex = /\x1B\[[0-9;]*[mGK]\s*/g;
    return input.replace(colorRegex, "");
};
exports.RemoveTerminalColorTags = RemoveTerminalColorTags;
