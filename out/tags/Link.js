"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Tag_1 = require("../utils/Tag");
//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link
class Link extends Tag_1.VoidTag {
    constructor() {
        super("link");
    }
    crossorigin(value) {
        if (value)
            this.setAttr("crossorigin", value);
        return this;
    }
    href(value) {
        if (value)
            this.setAttr("href", value);
        return this;
    }
    hreflang(value) {
        if (value)
            this.setAttr("hreflang", value);
        return this;
    }
    integrity(value) {
        if (value)
            this.setAttr("integrity", value);
        return this;
    }
    media(value) {
        if (value)
            this.setAttr("media", value);
        return this;
    }
    referrerpolicy(value) {
        if (value)
            this.setAttr("referrerpolicy", value);
        return this;
    }
    rel(value) {
        if (value)
            this.setAttr("rel", value);
        return this;
    }
    sizes(value) {
        if (value)
            this.setAttr("sizes", value);
        return this;
    }
    type(value) {
        if (value)
            this.setAttr("type", value);
        return this;
    }
    static withAttributes(attri) {
        var tag = new Link;
        tag.attrs(attri);
        return tag;
    }
}
exports.default = Link;
