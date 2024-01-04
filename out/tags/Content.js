"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UnattributedTag_1 = require("../utils/UnattributedTag");
//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/content
class Content extends UnattributedTag_1.UnattributedTag {
    constructor(children) {
        super("content", children);
    }
    static withAttributes(attri, children) {
        var tag = new Content(children);
        tag.attrs(attri);
        return tag;
    }
}
exports.default = Content;
