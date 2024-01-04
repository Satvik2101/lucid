"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Tag_1 = require("../utils/Tag");
//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress
class Progress extends Tag_1.Tag {
    constructor(children) {
        super("progress", children);
    }
    form(value) {
        if (value)
            this.setAttr("form", value);
        return this;
    }
    max(value) {
        if (value)
            this.setAttr("max", value);
        return this;
    }
    value(value) {
        if (value)
            this.setAttr("value", value);
        return this;
    }
    static withAttributes(attri, children) {
        var tag = new Progress(children);
        tag.attrs(attri);
        return tag;
    }
}
exports.default = Progress;
