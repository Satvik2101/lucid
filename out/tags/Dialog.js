"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Tag_1 = require("../utils/Tag");
//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog
class Dialog extends Tag_1.Tag {
    constructor(children) {
        super("dialog", children);
    }
    open(value) {
        if (value)
            this.setAttr("open", value);
        return this;
    }
    static withAttributes(attri, children) {
        var tag = new Dialog(children);
        tag.attrs(attri);
        return tag;
    }
}
exports.default = Dialog;
