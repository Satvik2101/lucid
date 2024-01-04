"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Tag_1 = require("../utils/Tag");
//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/source
class Source extends Tag_1.VoidTag {
    constructor() {
        super("source");
    }
    media(value) {
        if (value)
            this.setAttr("media", value);
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
    type(value) {
        if (value)
            this.setAttr("type", value);
        return this;
    }
    static withAttributes(attri) {
        var tag = new Source;
        tag.attrs(attri);
        return tag;
    }
}
exports.default = Source;
