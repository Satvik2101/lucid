"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Tag_1 = require("../utils/Tag");
//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blockquote
class Blockquote extends Tag_1.Tag {
    constructor(children) {
        super("blockquote", children);
    }
    cite(value) {
        if (value)
            this.setAttr("cite", value);
        return this;
    }
    static withAttributes(attri, children) {
        var tag = new Blockquote(children);
        tag.attrs(attri);
        return tag;
    }
}
exports.default = Blockquote;
