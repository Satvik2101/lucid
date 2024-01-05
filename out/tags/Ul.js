"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UnattributedTag_1 = require("../utils/UnattributedTag");
//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul
class Ul extends UnattributedTag_1.UnattributedTag {
    constructor(children) {
        super("ul", children);
    }
    static withAttributes(attri, children) {
        var tag = new Ul(children);
        tag.attrs(attri);
        return tag;
    }
}
exports.default = Ul;
