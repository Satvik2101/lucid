"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Tag_1 = require("../utils/Tag");
//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/marquee
class Marquee extends Tag_1.Tag {
    constructor(children) {
        super("marquee", children);
    }
    bgcolor(value) {
        if (value)
            this.setAttr("bgcolor", value);
        return this;
    }
    loop(value) {
        if (value)
            this.setAttr("loop", value);
        return this;
    }
    static withAttributes(attri, children) {
        var tag = new Marquee(children);
        tag.attrs(attri);
        return tag;
    }
}
exports.default = Marquee;
