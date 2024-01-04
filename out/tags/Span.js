"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UnattributedTag_1 = require("../utils/UnattributedTag");
//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/span
class Span extends UnattributedTag_1.UnattributedTag {
    constructor(children) {
        super("span", children);
    }
    static withAttributes(attri, children) {
        var tag = new Span(children);
        tag.attrs(attri);
        return tag;
    }
}
exports.default = Span;
