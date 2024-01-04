"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Tag_1 = require("../utils/Tag");
//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/style
class Style extends Tag_1.Tag {
    constructor(children) {
        super("style", children);
    }
    media(value) {
        if (value)
            this.setAttr("media", value);
        return this;
    }
    scoped(value) {
        if (value)
            this.setAttr("scoped", value);
        return this;
    }
    type(value) {
        if (value)
            this.setAttr("type", value);
        return this;
    }
    static withAttributes(attri, children) {
        var tag = new Style(children);
        tag.attrs(attri);
        return tag;
    }
}
exports.default = Style;
