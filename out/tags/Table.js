"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Tag_1 = require("../utils/Tag");
//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table
class Table extends Tag_1.Tag {
    constructor(children) {
        super("table", children);
    }
    align(value) {
        if (value)
            this.setAttr("align", value);
        return this;
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
    border(value) {
        if (value)
            this.setAttr("border", value);
        return this;
    }
    summary(value) {
        if (value)
            this.setAttr("summary", value);
        return this;
    }
    static withAttributes(attri, children) {
        var tag = new Table(children);
        tag.attrs(attri);
        return tag;
    }
}
exports.default = Table;
