"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Tag_1 = require("../utils/Tag");
//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tbody
class Tbody extends Tag_1.Tag {
    constructor(children) {
        super("tbody", children);
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
        var tag = new Tbody(children);
        tag.attrs(attri);
        return tag;
    }
}
exports.default = Tbody;
