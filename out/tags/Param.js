"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Tag_1 = require("../utils/Tag");
//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/param
class Param extends Tag_1.VoidTag {
    constructor() {
        super("param");
    }
    name(value) {
        if (value)
            this.setAttr("name", value);
        return this;
    }
    value(value) {
        if (value)
            this.setAttr("value", value);
        return this;
    }
    static withAttributes(attri) {
        var tag = new Param;
        tag.attrs(attri);
        return tag;
    }
}
exports.default = Param;
