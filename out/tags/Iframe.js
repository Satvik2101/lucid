"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Tag_1 = require("../utils/Tag");
//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe
class Iframe extends Tag_1.Tag {
    constructor(children) {
        super("iframe", children);
    }
    align(value) {
        if (value)
            this.setAttr("align", value);
        return this;
    }
    allow(value) {
        if (value)
            this.setAttr("allow", value);
        return this;
    }
    csp(value) {
        if (value)
            this.setAttr("csp", value);
        return this;
    }
    height(value) {
        if (value)
            this.setAttr("height", value);
        return this;
    }
    loading(value) {
        if (value)
            this.setAttr("loading", value);
        return this;
    }
    name(value) {
        if (value)
            this.setAttr("name", value);
        return this;
    }
    referrerpolicy(value) {
        if (value)
            this.setAttr("referrerpolicy", value);
        return this;
    }
    sandbox(value) {
        if (value)
            this.setAttr("sandbox", value);
        return this;
    }
    src(value) {
        if (value)
            this.setAttr("src", value);
        return this;
    }
    srcdoc(value) {
        if (value)
            this.setAttr("srcdoc", value);
        return this;
    }
    width(value) {
        if (value)
            this.setAttr("width", value);
        return this;
    }
    static withAttributes(attri, children) {
        var tag = new Iframe(children);
        tag.attrs(attri);
        return tag;
    }
}
exports.default = Iframe;
