"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UnattributedTag_1 = require("../utils/UnattributedTag");
//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/noembed
class Noembed extends UnattributedTag_1.UnattributedTag {
    constructor(children) {
        super("noembed", children);
    }
    static withAttributes(attri, children) {
        var tag = new Noembed(children);
        tag.attrs(attri);
        return tag;
    }
}
exports.default = Noembed;
