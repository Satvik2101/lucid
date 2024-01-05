"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Tag_1 = require("../utils/Tag");
//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/html
class Html extends Tag_1.Tag {
    constructor(children) {
        super("html", children);
    }
    manifest(value) {
        if (value)
            this.setAttr("manifest", value);
        return this;
    }
    static withAttributes(attri, children) {
        var tag = new Html(children);
        tag.attrs(attri);
        return tag;
    }
}
exports.default = Html;
