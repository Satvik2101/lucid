"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UnattributedTag_1 = require("../utils/UnattributedTag");
//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/hgroup
class Hgroup extends UnattributedTag_1.UnattributedTag {
    constructor(children) {
        super("hgroup", children);
    }
    static withAttributes(attri, children) {
        var tag = new Hgroup(children);
        tag.attrs(attri);
        return tag;
    }
}
exports.default = Hgroup;
