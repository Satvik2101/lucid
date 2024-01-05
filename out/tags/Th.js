"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Tag_1 = require("../utils/Tag");
//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/th
class Th extends Tag_1.Tag {
    constructor(children) {
        super("th", children);
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
    colspan(value) {
        if (value)
            this.setAttr("colspan", value);
        return this;
    }
    headers(value) {
        if (value)
            this.setAttr("headers", value);
        return this;
    }
    rowspan(value) {
        if (value)
            this.setAttr("rowspan", value);
        return this;
    }
    scope(value) {
        if (value)
            this.setAttr("scope", value);
        return this;
    }
    static withAttributes(attri, children) {
        var tag = new Th(children);
        tag.attrs(attri);
        return tag;
    }
}
exports.default = Th;
