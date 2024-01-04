"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Tag_1 = require("../utils/Tag");
//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button
class Button extends Tag_1.Tag {
    constructor(children) {
        super("button", children);
    }
    disabled(value) {
        if (value)
            this.setAttr("disabled", value);
        return this;
    }
    form(value) {
        if (value)
            this.setAttr("form", value);
        return this;
    }
    formaction(value) {
        if (value)
            this.setAttr("formaction", value);
        return this;
    }
    formenctype(value) {
        if (value)
            this.setAttr("formenctype", value);
        return this;
    }
    formmethod(value) {
        if (value)
            this.setAttr("formmethod", value);
        return this;
    }
    formnovalidate(value) {
        if (value)
            this.setAttr("formnovalidate", value);
        return this;
    }
    formtarget(value) {
        if (value)
            this.setAttr("formtarget", value);
        return this;
    }
    name(value) {
        if (value)
            this.setAttr("name", value);
        return this;
    }
    type(value) {
        if (value)
            this.setAttr("type", value);
        return this;
    }
    value(value) {
        if (value)
            this.setAttr("value", value);
        return this;
    }
    static withAttributes(attri, children) {
        var tag = new Button(children);
        tag.attrs(attri);
        return tag;
    }
}
exports.default = Button;
