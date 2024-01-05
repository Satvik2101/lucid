"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Tag_1 = require("../utils/Tag");
//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input
class Input extends Tag_1.VoidTag {
    constructor() {
        super("input");
    }
    accept(value) {
        if (value)
            this.setAttr("accept", value);
        return this;
    }
    alt(value) {
        if (value)
            this.setAttr("alt", value);
        return this;
    }
    autocomplete(value) {
        if (value)
            this.setAttr("autocomplete", value);
        return this;
    }
    capture(value) {
        if (value)
            this.setAttr("capture", value);
        return this;
    }
    checked(value) {
        if (value)
            this.setAttr("checked", value);
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
    height(value) {
        if (value)
            this.setAttr("height", value);
        return this;
    }
    list(value) {
        if (value)
            this.setAttr("list", value);
        return this;
    }
    max(value) {
        if (value)
            this.setAttr("max", value);
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
    min(value) {
        if (value)
            this.setAttr("min", value);
        return this;
    }
    multiple(value) {
        if (value)
            this.setAttr("multiple", value);
        return this;
    }
    name(value) {
        if (value)
            this.setAttr("name", value);
        return this;
    }
    pattern(value) {
        if (value)
            this.setAttr("pattern", value);
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
    size(value) {
        if (value)
            this.setAttr("size", value);
        return this;
    }
    src(value) {
        if (value)
            this.setAttr("src", value);
        return this;
    }
    step(value) {
        if (value)
            this.setAttr("step", value);
        return this;
    }
    type(value) {
        if (value)
            this.setAttr("type", value);
        return this;
    }
    usemap(value) {
        if (value)
            this.setAttr("usemap", value);
        return this;
    }
    value(value) {
        if (value)
            this.setAttr("value", value);
        return this;
    }
    width(value) {
        if (value)
            this.setAttr("width", value);
        return this;
    }
    static withAttributes(attri) {
        var tag = new Input;
        tag.attrs(attri);
        return tag;
    }
}
exports.default = Input;
