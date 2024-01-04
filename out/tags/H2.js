"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UnattributedTag_1 = require("../utils/UnattributedTag");
//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/h2
class H2 extends UnattributedTag_1.UnattributedTag {
    constructor(children) {
        super("h2", children);
    }
    static withAttributes(attri, children) {
        var tag = new H2(children);
        tag.attrs(attri);
        return tag;
    }
}
exports.default = H2;
