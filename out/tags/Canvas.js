"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Tag_1 = require("../utils/Tag");
//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas
class Canvas extends Tag_1.Tag {
    constructor(children) {
        super("canvas", children);
    }
    height(value) {
        if (value)
            this.setAttr("height", value);
        return this;
    }
    width(value) {
        if (value)
            this.setAttr("width", value);
        return this;
    }
    static withAttributes(attri, children) {
        var tag = new Canvas(children);
        tag.attrs(attri);
        return tag;
    }
}
exports.default = Canvas;
