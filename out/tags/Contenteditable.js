"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Tag_1 = require("../utils/Tag");
//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/contenteditable
class Contenteditable extends Tag_1.Tag {
    constructor(children) {
        super("contenteditable", children);
    }
    enterkeyhint(value) {
        if (value)
            this.setAttr("enterkeyhint", value);
        return this;
    }
    inputmode(value) {
        if (value)
            this.setAttr("inputmode", value);
        return this;
    }
    static withAttributes(attri, children) {
        var tag = new Contenteditable(children);
        tag.attrs(attri);
        return tag;
    }
}
exports.default = Contenteditable;
