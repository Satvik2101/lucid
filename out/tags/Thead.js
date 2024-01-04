"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Tag_1 = require("../utils/Tag");
//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/thead
class Thead extends Tag_1.Tag {
    constructor(children) {
        super("thead", children);
    }
    align(value) {
        if (value)
            this.setAttr("align", value);
        return this;
    }
    static withAttributes(attri, children) {
        var tag = new Thead(children);
        tag.attrs(attri);
        return tag;
    }
}
exports.default = Thead;
