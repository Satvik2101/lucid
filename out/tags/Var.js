"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UnattributedTag_1 = require("../utils/UnattributedTag");
//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/var
class Var extends UnattributedTag_1.UnattributedTag {
    constructor(children) {
        super("var", children);
    }
    static withAttributes(attri, children) {
        var tag = new Var(children);
        tag.attrs(attri);
        return tag;
    }
}
exports.default = Var;
