"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UnattributedTag_1 = require("../utils/UnattributedTag");
//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/head
class Head extends UnattributedTag_1.UnattributedTag {
    constructor(children) {
        super("head", children);
    }
    static withAttributes(attri, children) {
        var tag = new Head(children);
        tag.attrs(attri);
        return tag;
    }
}
exports.default = Head;
