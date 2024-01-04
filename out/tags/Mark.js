"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UnattributedTag_1 = require("../utils/UnattributedTag");
//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/mark
class Mark extends UnattributedTag_1.UnattributedTag {
    constructor(children) {
        super("mark", children);
    }
    static withAttributes(attri, children) {
        var tag = new Mark(children);
        tag.attrs(attri);
        return tag;
    }
}
exports.default = Mark;
