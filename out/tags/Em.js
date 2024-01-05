"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UnattributedTag_1 = require("../utils/UnattributedTag");
//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/em
class Em extends UnattributedTag_1.UnattributedTag {
    constructor(children) {
        super("em", children);
    }
    static withAttributes(attri, children) {
        var tag = new Em(children);
        tag.attrs(attri);
        return tag;
    }
}
exports.default = Em;
