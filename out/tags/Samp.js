"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UnattributedTag_1 = require("../utils/UnattributedTag");
//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/samp
class Samp extends UnattributedTag_1.UnattributedTag {
    constructor(children) {
        super("samp", children);
    }
    static withAttributes(attri, children) {
        var tag = new Samp(children);
        tag.attrs(attri);
        return tag;
    }
}
exports.default = Samp;
