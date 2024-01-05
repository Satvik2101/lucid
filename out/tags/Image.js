"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UnattributedTag_1 = require("../utils/UnattributedTag");
//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/image
class Image extends UnattributedTag_1.UnattributedTag {
    constructor(children) {
        super("image", children);
    }
    static withAttributes(attri, children) {
        var tag = new Image(children);
        tag.attrs(attri);
        return tag;
    }
}
exports.default = Image;