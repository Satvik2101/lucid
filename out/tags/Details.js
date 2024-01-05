"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Tag_1 = require("../utils/Tag");
//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details
class Details extends Tag_1.Tag {
    constructor(children) {
        super("details", children);
    }
    open(value) {
        if (value)
            this.setAttr("open", value);
        return this;
    }
    static withAttributes(attri, children) {
        var tag = new Details(children);
        tag.attrs(attri);
        return tag;
    }
}
exports.default = Details;
