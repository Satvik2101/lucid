"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Tag_1 = require("../utils/Tag");
//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/object
class ObjectTag extends Tag_1.Tag {
    constructor(children) {
        super("object", children);
    }
    border(value) {
        if (value)
            this.setAttr("border", value);
        return this;
    }
    data(value) {
        if (value)
            this.setAttr("data", value);
        return this;
    }
    form(value) {
        if (value)
            this.setAttr("form", value);
        return this;
    }
    height(value) {
        if (value)
            this.setAttr("height", value);
        return this;
    }
    name(value) {
        if (value)
            this.setAttr("name", value);
        return this;
    }
    type(value) {
        if (value)
            this.setAttr("type", value);
        return this;
    }
    usemap(value) {
        if (value)
            this.setAttr("usemap", value);
        return this;
    }
    width(value) {
        if (value)
            this.setAttr("width", value);
        return this;
    }
    static withAttributes(attri, children) {
        var tag = new ObjectTag(children);
        tag.attrs(attri);
        return tag;
    }
}
exports.default = ObjectTag;
