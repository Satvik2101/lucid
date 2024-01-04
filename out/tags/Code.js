"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UnattributedTag_1 = require("../utils/UnattributedTag");
//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/code
class Code extends UnattributedTag_1.UnattributedTag {
    constructor(children) {
        super("code", children);
    }
    static withAttributes(attri, children) {
        var tag = new Code(children);
        tag.attrs(attri);
        return tag;
    }
}
exports.default = Code;
