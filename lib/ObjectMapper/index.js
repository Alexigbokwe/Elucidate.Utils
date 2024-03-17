"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectMapper = void 0;
class Properties {
    source;
    target;
    map(source, target) {
        if (Array.isArray(source) || Array.isArray(target)) {
            throw new Error("PropertyMapper Source or target can't be an Array");
        }
        Object.keys(source).forEach((key) => {
            if (key in target) {
                target[key] = source[key];
            }
        });
        this.source = source;
        this.target = target;
        return new RePoint(source, target);
    }
}
class RePoint {
    source;
    target;
    constructor(source, target) {
        this.source = source;
        this.target = target;
    }
    rePoint(sourceKey, targetKey) {
        if (targetKey in this.target) {
            this.target[targetKey] = this.source[sourceKey];
        }
        return this;
    }
}
let ObjectMapper = new Properties();
exports.ObjectMapper = ObjectMapper;
