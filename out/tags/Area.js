"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Tag_1 = require("../utils/Tag");
//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/area
class Area extends Tag_1.VoidTag {
    constructor() {
        super("area");
    }
    alt(value) {
        if (value)
            this.setAttr("alt", value);
        return this;
    }
    coords(value) {
        if (value)
            this.setAttr("coords", value);
        return this;
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
    static withAttributes(attri) {
        var tag = new Area;
        tag.attrs(attri);
        return tag;
    }
}
exports.default = Area;
