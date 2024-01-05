"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Tag_1 = require("../utils/Tag");
//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol
class Ol extends Tag_1.Tag {
    constructor(children) {
        super("ol", children);
    }
    reversed(value) {
        if (value)
            this.setAttr("reversed", value);
        return this;
    }
    start(value) {
        if (value)
            this.setAttr("start", value);
        return this;
    }
    type(value) {
        if (value)
            this.setAttr("type", value);
        return this;
    }
    static withAttributes(attri, children) {
        var tag = new Ol(children);
        tag.attrs(attri);
        return tag;
    }
}
exports.default = Ol;
