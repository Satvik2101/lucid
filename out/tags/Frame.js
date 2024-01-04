"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UnattributedTag_1 = require("../utils/UnattributedTag");
//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/frame
class Frame extends UnattributedTag_1.UnattributedTag {
    constructor(children) {
        super("frame", children);
    }
    static withAttributes(attri, children) {
        var tag = new Frame(children);
        tag.attrs(attri);
        return tag;
    }
}
exports.default = Frame;
