"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UnattributedTag_1 = require("../utils/UnattributedTag");
//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dir
class Dir extends UnattributedTag_1.UnattributedTag {
    constructor(children) {
        super("dir", children);
    }
    static withAttributes(attri, children) {
        var tag = new Dir(children);
        tag.attrs(attri);
        return tag;
    }
}
exports.default = Dir;
