"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UnattributedTag_1 = require("../utils/UnattributedTag");
//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/sub
class Sub extends UnattributedTag_1.UnattributedTag {
    constructor(children) {
        super("sub", children);
    }
    static withAttributes(attri, children) {
        var tag = new Sub(children);
        tag.attrs(attri);
        return tag;
    }
}
exports.default = Sub;
