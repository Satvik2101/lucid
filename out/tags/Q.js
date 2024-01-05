"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Tag_1 = require("../utils/Tag");
//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/q
class Q extends Tag_1.Tag {
    constructor(children) {
        super("q", children);
    }
    cite(value) {
        if (value)
            this.setAttr("cite", value);
        return this;
    }
    static withAttributes(attri, children) {
        var tag = new Q(children);
        tag.attrs(attri);
        return tag;
    }
}
exports.default = Q;
