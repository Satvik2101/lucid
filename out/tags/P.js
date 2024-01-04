"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UnattributedTag_1 = require("../utils/UnattributedTag");
//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/p
class P extends UnattributedTag_1.UnattributedTag {
    constructor(children) {
        super("p", children);
    }
    static withAttributes(attri, children) {
        var tag = new P(children);
        tag.attrs(attri);
        return tag;
    }
}
exports.default = P;
