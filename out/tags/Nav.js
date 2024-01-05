"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UnattributedTag_1 = require("../utils/UnattributedTag");
//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/nav
class Nav extends UnattributedTag_1.UnattributedTag {
    constructor(children) {
        super("nav", children);
    }
    static withAttributes(attri, children) {
        var tag = new Nav(children);
        tag.attrs(attri);
        return tag;
    }
}
exports.default = Nav;
