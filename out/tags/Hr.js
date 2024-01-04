"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Tag_1 = require("../utils/Tag");
//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/hr
class Hr extends Tag_1.VoidTag {
    constructor() {
        super("hr");
    }
    align(value) {
        if (value)
            this.setAttr("align", value);
        return this;
    }
    color(value) {
        if (value)
            this.setAttr("color", value);
        return this;
    }
    static withAttributes(attri) {
        var tag = new Hr;
        tag.attrs(attri);
        return tag;
    }
}
exports.default = Hr;
