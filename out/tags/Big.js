"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UnattributedTag_1 = require("../utils/UnattributedTag");
//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/big
class Big extends UnattributedTag_1.UnattributedTag {
    constructor(children) {
        super("big", children);
    }
    static withAttributes(attri, children) {
        var tag = new Big(children);
        tag.attrs(attri);
        return tag;
    }
}
exports.default = Big;
