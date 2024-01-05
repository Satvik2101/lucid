"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UnattributedTag_1 = require("../utils/UnattributedTag");
//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dd
class Dd extends UnattributedTag_1.UnattributedTag {
    constructor(children) {
        super("dd", children);
    }
    static withAttributes(attri, children) {
        var tag = new Dd(children);
        tag.attrs(attri);
        return tag;
    }
}
exports.default = Dd;