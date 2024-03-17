"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertFirstCharacterToLowerCase = void 0;
const convertFirstCharacterToLowerCase = (name) => {
    return name.charAt(0).toLowerCase() + name.slice(1);
};
exports.convertFirstCharacterToLowerCase = convertFirstCharacterToLowerCase;
