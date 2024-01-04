"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Tag_1 = require("../utils/Tag");
//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/option
class Option extends Tag_1.Tag {
    constructor(children) {
        super("option", children);
    }
    disabled(value) {
        if (value)
            this.setAttr("disabled", value);
        return this;
    }
    label(value) {
        if (value)
            this.setAttr("label", value);
        return this;
    }
    selected(value) {
        if (value)
            this.setAttr("selected", value);
        return this;
    }
    value(value) {
        if (value)
            this.setAttr("value", value);
        return this;
    }
    static withAttributes(attri, children) {
        var tag = new Option(children);
        tag.attrs(attri);
        return tag;
    }
}
exports.default = Option;
