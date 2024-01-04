"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UnattributedTag_1 = require("../utils/UnattributedTag");
//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/rb
class Rb extends UnattributedTag_1.UnattributedTag {
    constructor(children) {
        super("rb", children);
    }
    static withAttributes(attri, children) {
        var tag = new Rb(children);
        tag.attrs(attri);
        return tag;
    }
}
exports.default = Rb;
