"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UnattributedTag_1 = require("../utils/UnattributedTag");
//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/xmp
class Xmp extends UnattributedTag_1.UnattributedTag {
    constructor(children) {
        super("xmp", children);
    }
    static withAttributes(attri, children) {
        var tag = new Xmp(children);
        tag.attrs(attri);
        return tag;
    }
}
exports.default = Xmp;
