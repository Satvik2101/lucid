"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Tag_1 = require("../utils/Tag");
//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tr
class Tr extends Tag_1.Tag {
    constructor(children) {
        super("tr", children);
    }
    align(value) {
        if (value)
            this.setAttr("align", value);
        return this;
    }
    bgcolor(value) {
        if (value)
            this.setAttr("bgcolor", value);
        return this;
    }
    static withAttributes(attri, children) {
        var tag = new Tr(children);
        tag.attrs(attri);
        return tag;
    }
}
exports.default = Tr;
