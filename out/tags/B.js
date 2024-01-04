"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UnattributedTag_1 = require("../utils/UnattributedTag");
//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/b
class B extends UnattributedTag_1.UnattributedTag {
    constructor(children) {
        super("b", children);
    }
    static withAttributes(attri, children) {
        var tag = new B(children);
        tag.attrs(attri);
        return tag;
    }
}
exports.default = B;
