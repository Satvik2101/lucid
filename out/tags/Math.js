"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UnattributedTag_1 = require("../utils/UnattributedTag");
//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/math
class Math extends UnattributedTag_1.UnattributedTag {
    constructor(children) {
        super("math", children);
    }
    static withAttributes(attri, children) {
        var tag = new Math(children);
        tag.attrs(attri);
        return tag;
    }
}
exports.default = Math;
