"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Tag_1 = require("../utils/Tag");
//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/optgroup
class Optgroup extends Tag_1.Tag {
    constructor(children) {
        super("optgroup", children);
    }
    disabled(value) {
        if (value)
            this.setAttr("disabled", value);
        return this;
    }
    label(value) {
        if (value)
            this.setAttr("label", value);
        return this;
    }
    static withAttributes(attri, children) {
        var tag = new Optgroup(children);
        tag.attrs(attri);
        return tag;
    }
}
exports.default = Optgroup;
