"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UnattributedTag_1 = require("../utils/UnattributedTag");
//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/aside
class Aside extends UnattributedTag_1.UnattributedTag {
    constructor(children) {
        super("aside", children);
    }
    static withAttributes(attri, children) {
        var tag = new Aside(children);
        tag.attrs(attri);
        return tag;
    }
}
exports.default = Aside;
