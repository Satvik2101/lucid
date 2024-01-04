"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UnattributedTag_1 = require("../utils/UnattributedTag");
//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/kbd
class Kbd extends UnattributedTag_1.UnattributedTag {
    constructor(children) {
        super("kbd", children);
    }
    static withAttributes(attri, children) {
        var tag = new Kbd(children);
        tag.attrs(attri);
        return tag;
    }
}
exports.default = Kbd;
