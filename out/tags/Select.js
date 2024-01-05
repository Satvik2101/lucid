"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Tag_1 = require("../utils/Tag");
//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select
class Select extends Tag_1.Tag {
    constructor(children) {
        super("select", children);
    }
    autocomplete(value) {
        if (value)
            this.setAttr("autocomplete", value);
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
    static withAttributes(attri, children) {
        var tag = new Select(children);
        tag.attrs(attri);
        return tag;
    }
}
exports.default = Select;
