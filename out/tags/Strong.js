"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UnattributedTag_1 = require("../utils/UnattributedTag");
//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/strong
class Strong extends UnattributedTag_1.UnattributedTag {
    constructor(children) {
        super("strong", children);
    }
    static withAttributes(attri, children) {
        var tag = new Strong(children);
        tag.attrs(attri);
        return tag;
    }
}
exports.default = Strong;
