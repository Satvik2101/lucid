"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UnattributedTag_1 = require("../utils/UnattributedTag");
//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dfn
class Dfn extends UnattributedTag_1.UnattributedTag {
    constructor(children) {
        super("dfn", children);
    }
    static withAttributes(attri, children) {
        var tag = new Dfn(children);
        tag.attrs(attri);
        return tag;
    }
}
exports.default = Dfn;
