"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UnattributedTag_1 = require("../utils/UnattributedTag");
//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/strike
class Strike extends UnattributedTag_1.UnattributedTag {
    constructor(children) {
        super("strike", children);
    }
    static withAttributes(attri, children) {
        var tag = new Strike(children);
        tag.attrs(attri);
        return tag;
    }
}
exports.default = Strike;
