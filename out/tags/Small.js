"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UnattributedTag_1 = require("../utils/UnattributedTag");
//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/small
class Small extends UnattributedTag_1.UnattributedTag {
    constructor(children) {
        super("small", children);
    }
    static withAttributes(attri, children) {
        var tag = new Small(children);
        tag.attrs(attri);
        return tag;
    }
}
exports.default = Small;
