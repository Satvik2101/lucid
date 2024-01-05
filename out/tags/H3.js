"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UnattributedTag_1 = require("../utils/UnattributedTag");
//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/h3
class H3 extends UnattributedTag_1.UnattributedTag {
    constructor(children) {
        super("h3", children);
    }
    static withAttributes(attri, children) {
        var tag = new H3(children);
        tag.attrs(attri);
        return tag;
    }
}
exports.default = H3;