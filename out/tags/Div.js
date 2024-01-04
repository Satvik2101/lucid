"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UnattributedTag_1 = require("../utils/UnattributedTag");
//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div
class Div extends UnattributedTag_1.UnattributedTag {
    constructor(children) {
        super("div", children);
    }
    static withAttributes(attri, children) {
        var tag = new Div(children);
        tag.attrs(attri);
        return tag;
    }
}
exports.default = Div;
