"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UnattributedTag_1 = require("../utils/UnattributedTag");
//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figcaption
class Figcaption extends UnattributedTag_1.UnattributedTag {
    constructor(children) {
        super("figcaption", children);
    }
    static withAttributes(attri, children) {
        var tag = new Figcaption(children);
        tag.attrs(attri);
        return tag;
    }
}
exports.default = Figcaption;
