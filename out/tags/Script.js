"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Tag_1 = require("../utils/Tag");
//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script
class Script extends Tag_1.Tag {
    constructor(children) {
        super("script", children);
    }
    async(value) {
        if (value)
            this.setAttr("async", value);
        return this;
    }
    crossorigin(value) {
        if (value)
            this.setAttr("crossorigin", value);
        return this;
    }
    defer(value) {
        if (value)
            this.setAttr("defer", value);
        return this;
    }
    integrity(value) {
        if (value)
            this.setAttr("integrity", value);
        return this;
    }
    language(value) {
        if (value)
            this.setAttr("language", value);
        return this;
    }
    referrerpolicy(value) {
        if (value)
            this.setAttr("referrerpolicy", value);
        return this;
    }
    src(value) {
        if (value)
            this.setAttr("src", value);
        return this;
    }
    type(value) {
        if (value)
            this.setAttr("type", value);
        return this;
    }
    static withAttributes(attri, children) {
        var tag = new Script(children);
        tag.attrs(attri);
        return tag;
    }
}
exports.default = Script;
