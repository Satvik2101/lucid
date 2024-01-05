"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Tag_1 = require("../utils/Tag");
//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/font
class Font extends Tag_1.Tag {
    constructor(children) {
        super("font", children);
    }
    color(value) {
        if (value)
            this.setAttr("color", value);
        return this;
    }
    static withAttributes(attri, children) {
        var tag = new Font(children);
        tag.attrs(attri);
        return tag;
    }
}
exports.default = Font;
