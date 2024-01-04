"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UnattributedTag_1 = require("../utils/UnattributedTag");
//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/header
class Header extends UnattributedTag_1.UnattributedTag {
    constructor(children) {
        super("header", children);
    }
    static withAttributes(attri, children) {
        var tag = new Header(children);
        tag.attrs(attri);
        return tag;
    }
}
exports.default = Header;
