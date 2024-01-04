"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Tag_1 = require("../utils/Tag");
//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form
class Form extends Tag_1.Tag {
    constructor(children) {
        super("form", children);
    }
    accept(value) {
        if (value)
            this.setAttr("accept", value);
        return this;
    }
    accept_charset(value) {
        if (value)
            this.setAttr("accept-charset", value);
        return this;
    }
    action(value) {
        if (value)
            this.setAttr("action", value);
        return this;
    }
    autocomplete(value) {
        if (value)
            this.setAttr("autocomplete", value);
        return this;
    }
    enctype(value) {
        if (value)
            this.setAttr("enctype", value);
        return this;
    }
    method(value) {
        if (value)
            this.setAttr("method", value);
        return this;
    }
    name(value) {
        if (value)
            this.setAttr("name", value);
        return this;
    }
    novalidate(value) {
        if (value)
            this.setAttr("novalidate", value);
        return this;
    }
    target(value) {
        if (value)
            this.setAttr("target", value);
        return this;
    }
    static withAttributes(attri, children) {
        var tag = new Form(children);
        tag.attrs(attri);
        return tag;
    }
}
exports.default = Form;
