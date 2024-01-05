"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Tag_1 = require("../utils/Tag");
//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/br
class Br extends Tag_1.VoidTag {
    constructor() {
        super("br");
    }
    static withAttributes(attri) {
        var tag = new Br;
        tag.attrs(attri);
        return tag;
    }
}
exports.default = Br;
