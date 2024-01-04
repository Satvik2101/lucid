"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Tag_1 = require("../utils/Tag");
//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea
class Textarea extends Tag_1.Tag {
    constructor(children) {
        super("textarea", children);
    }
    autocomplete(value) {
        if (value)
            this.setAttr("autocomplete", value);
        return this;
    }
    cols(value) {
        if (value)
            this.setAttr("cols", value);
        return this;
    }
    dirname(value) {
        if (value)
            this.setAttr("dirname", value);
        return this;
    }
    disabled(value) {
        if (value)
            this.setAttr("disabled", value);
        return this;
    }
    enterkeyhint(value) {
        if (value)
            this.setAttr("enterkeyhint", value);
        return this;
    }
    form(value) {
        if (value)
            this.setAttr("form", value);
        return this;
    }
    inputmode(value) {
        if (value)
            this.setAttr("inputmode", value);
        return this;
    }
    maxlength(value) {
        if (value)
            this.setAttr("maxlength", value);
        return this;
    }
    minlength(value) {
        if (value)
            this.setAttr("minlength", value);
        return this;
    }
    name(value) {
        if (value)
            this.setAttr("name", value);
        return this;
    }
    placeholder(value) {
        if (value)
            this.setAttr("placeholder", value);
        return this;
    }
    readonly(value) {
        if (value)
            this.setAttr("readonly", value);
        return this;
    }
    required(value) {
        if (value)
            this.setAttr("required", value);
        return this;
    }
    rows(value) {
        if (value)
            this.setAttr("rows", value);
        return this;
    }
    wrap(value) {
        if (value)
            this.setAttr("wrap", value);
        return this;
    }
    static withAttributes(attri, children) {
        var tag = new Textarea(children);
        tag.attrs(attri);
        return tag;
    }
}
exports.default = Textarea;
