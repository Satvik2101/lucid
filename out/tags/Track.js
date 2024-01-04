"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Tag_1 = require("../utils/Tag");
//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/track
class Track extends Tag_1.VoidTag {
    constructor() {
        super("track");
    }
    default(value) {
        if (value)
            this.setAttr("default", value);
        return this;
    }
    kind(value) {
        if (value)
            this.setAttr("kind", value);
        return this;
    }
    label(value) {
        if (value)
            this.setAttr("label", value);
        return this;
    }
    src(value) {
        if (value)
            this.setAttr("src", value);
        return this;
    }
    srclang(value) {
        if (value)
            this.setAttr("srclang", value);
        return this;
    }
    static withAttributes(attri) {
        var tag = new Track;
        tag.attrs(attri);
        return tag;
    }
}
exports.default = Track;
