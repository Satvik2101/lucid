"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UnattributedTag_1 = require("../utils/UnattributedTag");
//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/i
class I extends UnattributedTag_1.UnattributedTag {
    constructor(children) {
        super("i", children);
    }
    static withAttributes(attri, children) {
        var tag = new I(children);
        tag.attrs(attri);
        return tag;
    }
}
exports.default = I;
