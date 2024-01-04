"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Tag_1 = require("../utils/Tag");
//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/col
class Col extends Tag_1.VoidTag {
    constructor() {
        super("col");
    }
    align(value) {
        if (value)
            this.setAttr("align", value);
        return this;
    }
    bgcolor(value) {
        if (value)
            this.setAttr("bgcolor", value);
        return this;
    }
    span(value) {
        if (value)
            this.setAttr("span", value);
        return this;
    }
    static withAttributes(attri) {
        var tag = new Col;
        tag.attrs(attri);
        return tag;
    }
}
exports.default = Col;
