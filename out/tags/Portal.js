"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UnattributedTag_1 = require("../utils/UnattributedTag");
//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/portal
class Portal extends UnattributedTag_1.UnattributedTag {
    constructor(children) {
        super("portal", children);
    }
    static withAttributes(attri, children) {
        var tag = new Portal(children);
        tag.attrs(attri);
        return tag;
    }
}
exports.default = Portal;
