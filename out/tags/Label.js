"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Tag_1 = require("../utils/Tag");
//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label
class Label extends Tag_1.Tag {
    constructor(children) {
        super("label", children);
    }
    for(value) {
        if (value)
            this.setAttr("for", value);
        return this;
    }
    form(value) {
        if (value)
            this.setAttr("form", value);
        return this;
    }
    static withAttributes(attri, children) {
        var tag = new Label(children);
        tag.attrs(attri);
        return tag;
    }
}
exports.default = Label;
