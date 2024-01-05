"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Tag_1 = require("../utils/Tag");
//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ins
class Ins extends Tag_1.Tag {
    constructor(children) {
        super("ins", children);
    }
    cite(value) {
        if (value)
            this.setAttr("cite", value);
        return this;
    }
    datetime(value) {
        if (value)
            this.setAttr("datetime", value);
        return this;
    }
    static withAttributes(attri, children) {
        var tag = new Ins(children);
        tag.attrs(attri);
        return tag;
    }
}
exports.default = Ins;
