"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UnattributedTag_1 = require("../utils/UnattributedTag");
//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/menuitem
class Menuitem extends UnattributedTag_1.UnattributedTag {
    constructor(children) {
        super("menuitem", children);
    }
    static withAttributes(attri, children) {
        var tag = new Menuitem(children);
        tag.attrs(attri);
        return tag;
    }
}
exports.default = Menuitem;
