"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Tag_1 = require("../utils/Tag");
//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/del
class Del extends Tag_1.Tag {
    constructor(children) {
        super("del", children);
    }
    cite(value) {
        if (value)
            this.setAttr("cite", value);
        return this;
    }
    datetime(value) {
        if (value)
            this.setAttr("datetime", value);
        return this;
    }
    static withAttributes(attri, children) {
        var tag = new Del(children);
        tag.attrs(attri);
        return tag;
    }
}
exports.default = Del;
