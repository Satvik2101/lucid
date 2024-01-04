"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UnattributedTag_1 = require("../utils/UnattributedTag");
//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/legend
class Legend extends UnattributedTag_1.UnattributedTag {
    constructor(children) {
        super("legend", children);
    }
    static withAttributes(attri, children) {
        var tag = new Legend(children);
        tag.attrs(attri);
        return tag;
    }
}
exports.default = Legend;
