"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UnattributedTag_1 = require("../utils/UnattributedTag");
//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/rp
class Rp extends UnattributedTag_1.UnattributedTag {
    constructor(children) {
        super("rp", children);
    }
    static withAttributes(attri, children) {
        var tag = new Rp(children);
        tag.attrs(attri);
        return tag;
    }
}
exports.default = Rp;
