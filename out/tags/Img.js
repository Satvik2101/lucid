"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Tag_1 = require("../utils/Tag");
//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img
class Img extends Tag_1.VoidTag {
    constructor() {
        super("img");
    }
    align(value) {
        if (value)
            this.setAttr("align", value);
        return this;
    }
    alt(value) {
        if (value)
            this.setAttr("alt", value);
        return this;
    }
    border(value) {
        if (value)
            this.setAttr("border", value);
        return this;
    }
    crossorigin(value) {
        if (value)
            this.setAttr("crossorigin", value);
        return this;
    }
    decoding(value) {
        if (value)
            this.setAttr("decoding", value);
        return this;
    }
    height(value) {
        if (value)
            this.setAttr("height", value);
        return this;
    }
    intrinsicsize(value) {
        if (value)
            this.setAttr("intrinsicsize", value);
        return this;
    }
    ismap(value) {
        if (value)
            this.setAttr("ismap", value);
        return this;
    }
    loading(value) {
        if (value)
            this.setAttr("loading", value);
        return this;
    }
    referrerpolicy(value) {
        if (value)
            this.setAttr("referrerpolicy", value);
        return this;
    }
    sizes(value) {
        if (value)
            this.setAttr("sizes", value);
        return this;
    }
    src(value) {
        if (value)
            this.setAttr("src", value);
        return this;
    }
    srcset(value) {
        if (value)
            this.setAttr("srcset", value);
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
    static withAttributes(attri) {
        var tag = new Img;
        tag.attrs(attri);
        return tag;
    }
}
exports.default = Img;
