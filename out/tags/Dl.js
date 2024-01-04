"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UnattributedTag_1 = require("../utils/UnattributedTag");
//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dl
class Dl extends UnattributedTag_1.UnattributedTag {
    constructor(children) {
        super("dl", children);
    }
    static withAttributes(attri, children) {
        var tag = new Dl(children);
        tag.attrs(attri);
        return tag;
    }
}
exports.default = Dl;
