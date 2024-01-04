"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UnattributedTag_1 = require("../utils/UnattributedTag");
//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/bdo
class Bdo extends UnattributedTag_1.UnattributedTag {
    constructor(children) {
        super("bdo", children);
    }
    static withAttributes(attri, children) {
        var tag = new Bdo(children);
        tag.attrs(attri);
        return tag;
    }
}
exports.default = Bdo;
