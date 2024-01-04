"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UnattributedTag_1 = require("../utils/UnattributedTag");
//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/pre
class Pre extends UnattributedTag_1.UnattributedTag {
    constructor(children) {
        super("pre", children);
    }
    static withAttributes(attri, children) {
        var tag = new Pre(children);
        tag.attrs(attri);
        return tag;
    }
}
exports.default = Pre;
