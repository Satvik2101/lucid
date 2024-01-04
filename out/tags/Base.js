"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Tag_1 = require("../utils/Tag");
//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/base
class Base extends Tag_1.VoidTag {
    constructor() {
        super("base");
    }
    href(value) {
        if (value)
            this.setAttr("href", value);
        return this;
    }
    target(value) {
        if (value)
            this.setAttr("target", value);
        return this;
    }
    static withAttributes(attri) {
        var tag = new Base;
        tag.attrs(attri);
        return tag;
    }
}
exports.default = Base;
