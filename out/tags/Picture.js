"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UnattributedTag_1 = require("../utils/UnattributedTag");
//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture
class Picture extends UnattributedTag_1.UnattributedTag {
    constructor(children) {
        super("picture", children);
    }
    static withAttributes(attri, children) {
        var tag = new Picture(children);
        tag.attrs(attri);
        return tag;
    }
}
exports.default = Picture;
