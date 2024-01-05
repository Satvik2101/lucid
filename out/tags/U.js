"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UnattributedTag_1 = require("../utils/UnattributedTag");
//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/u
class U extends UnattributedTag_1.UnattributedTag {
    constructor(children) {
        super("u", children);
    }
    static withAttributes(attri, children) {
        var tag = new U(children);
        tag.attrs(attri);
        return tag;
    }
}
exports.default = U;