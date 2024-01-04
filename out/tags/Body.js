"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Tag_1 = require("../utils/Tag");
//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/body
class Body extends Tag_1.Tag {
    constructor(children) {
        super("body", children);
    }
    background(value) {
        if (value)
            this.setAttr("background", value);
        return this;
    }
    bgcolor(value) {
        if (value)
            this.setAttr("bgcolor", value);
        return this;
    }
    static withAttributes(attri, children) {
        var tag = new Body(children);
        tag.attrs(attri);
        return tag;
    }
}
exports.default = Body;
