"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Tag_1 = require("../utils/Tag");
//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/menu
class Menu extends Tag_1.Tag {
    constructor(children) {
        super("menu", children);
    }
    type(value) {
        if (value)
            this.setAttr("type", value);
        return this;
    }
    static withAttributes(attri, children) {
        var tag = new Menu(children);
        tag.attrs(attri);
        return tag;
    }
}
exports.default = Menu;
