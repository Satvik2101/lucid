"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Tag_1 = require("../utils/Tag");
//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/wbr
class Wbr extends Tag_1.VoidTag {
    constructor() {
        super("wbr");
    }
    static withAttributes(attri) {
        var tag = new Wbr;
        tag.attrs(attri);
        return tag;
    }
}
exports.default = Wbr;
