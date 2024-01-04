"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Tag_1 = require("../utils/Tag");
//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/caption
class Caption extends Tag_1.Tag {
    constructor(children) {
        super("caption", children);
    }
    align(value) {
        if (value)
            this.setAttr("align", value);
        return this;
    }
    static withAttributes(attri, children) {
        var tag = new Caption(children);
        tag.attrs(attri);
        return tag;
    }
}
exports.default = Caption;
