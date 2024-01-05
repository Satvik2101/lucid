"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Tag_1 = require("../utils/Tag");
//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/embed
class Embed extends Tag_1.VoidTag {
    constructor() {
        super("embed");
    }
    height(value) {
        if (value)
            this.setAttr("height", value);
        return this;
    }
    src(value) {
        if (value)
            this.setAttr("src", value);
        return this;
    }
    type(value) {
        if (value)
            this.setAttr("type", value);
        return this;
    }
    width(value) {
        if (value)
            this.setAttr("width", value);
        return this;
    }
    static withAttributes(attri) {
        var tag = new Embed;
        tag.attrs(attri);
        return tag;
    }
}
exports.default = Embed;
