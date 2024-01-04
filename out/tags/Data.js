"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Tag_1 = require("../utils/Tag");
//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/data
class Data extends Tag_1.Tag {
    constructor(children) {
        super("data", children);
    }
    value(value) {
        if (value)
            this.setAttr("value", value);
        return this;
    }
    static withAttributes(attri, children) {
        var tag = new Data(children);
        tag.attrs(attri);
        return tag;
    }
}
exports.default = Data;
