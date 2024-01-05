"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UnattributedTag_1 = require("../utils/UnattributedTag");
//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot
class Slot extends UnattributedTag_1.UnattributedTag {
    constructor(children) {
        super("slot", children);
    }
    static withAttributes(attri, children) {
        var tag = new Slot(children);
        tag.attrs(attri);
        return tag;
    }
}
exports.default = Slot;
