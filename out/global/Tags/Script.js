"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Tag_1 = require("../../Tag");
class Script extends Tag_1.Tag {
    constructor(src) {
        super("script", { src }, []);
    }
}
exports.default = Script;
