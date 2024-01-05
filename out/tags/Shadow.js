"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UnattributedTag_1 = require("../utils/UnattributedTag");
//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/shadow
class Shadow extends UnattributedTag_1.UnattributedTag {
    constructor(children) {
        super("shadow", children);
    }
    static withAttributes(attri, children) {
        var tag = new Shadow(children);
        tag.attrs(attri);
        return tag;
    }
}
exports.default = Shadow;
