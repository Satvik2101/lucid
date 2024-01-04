"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Tag_1 = require("../utils/Tag");
//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a
class A extends Tag_1.Tag {
    constructor(children) {
        super("a", children);
    }
    download(value) {
        if (value)
            this.setAttr("download", value);
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
    media(value) {
        if (value)
            this.setAttr("media", value);
        return this;
    }
    ping(value) {
        if (value)
            this.setAttr("ping", value);
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
    shape(value) {
        if (value)
            this.setAttr("shape", value);
        return this;
    }
    target(value) {
        if (value)
            this.setAttr("target", value);
        return this;
    }
    static withAttributes(attri, children) {
        var tag = new A(children);
        tag.attrs(attri);
        return tag;
    }
}
exports.default = A;
