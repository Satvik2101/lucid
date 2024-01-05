"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Tag_1 = require("../utils/Tag");
//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta
class Meta extends Tag_1.VoidTag {
    constructor() {
        super("meta");
    }
    charset(value) {
        if (value)
            this.setAttr("charset", value);
        return this;
    }
    content(value) {
        if (value)
            this.setAttr("content", value);
        return this;
    }
    http_equiv(value) {
        if (value)
            this.setAttr("http-equiv", value);
        return this;
    }
    name(value) {
        if (value)
            this.setAttr("name", value);
        return this;
    }
    property(value) {
        if (value)
            this.setAttr("property", value);
        return this;
    }
    static withAttributes(attri) {
        var tag = new Meta;
        tag.attrs(attri);
        return tag;
    }
}
exports.default = Meta;
