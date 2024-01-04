"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UnattributedTag_1 = require("../utils/UnattributedTag");
//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/h6
class H6 extends UnattributedTag_1.UnattributedTag {
    constructor(children) {
        super("h6", children);
    }
    static withAttributes(attri, children) {
        var tag = new H6(children);
        tag.attrs(attri);
        return tag;
    }
}
exports.default = H6;
