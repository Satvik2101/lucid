"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Tag_1 = require("../utils/Tag");
//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li
class Li extends Tag_1.Tag {
    constructor(children) {
        super("li", children);
    }
    value(value) {
        if (value)
            this.setAttr("value", value);
        return this;
    }
    static withAttributes(attri, children) {
        var tag = new Li(children);
        tag.attrs(attri);
        return tag;
    }
}
exports.default = Li;
