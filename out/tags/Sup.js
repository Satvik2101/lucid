"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UnattributedTag_1 = require("../utils/UnattributedTag");
//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/sup
class Sup extends UnattributedTag_1.UnattributedTag {
    constructor(children) {
        super("sup", children);
    }
    static withAttributes(attri, children) {
        var tag = new Sup(children);
        tag.attrs(attri);
        return tag;
    }
}
exports.default = Sup;
