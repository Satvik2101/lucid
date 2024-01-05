"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UnattributedTag_1 = require("../utils/UnattributedTag");
//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tt
class Tt extends UnattributedTag_1.UnattributedTag {
    constructor(children) {
        super("tt", children);
    }
    static withAttributes(attri, children) {
        var tag = new Tt(children);
        tag.attrs(attri);
        return tag;
    }
}
exports.default = Tt;
