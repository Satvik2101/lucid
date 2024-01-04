"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UnattributedTag_1 = require("../utils/UnattributedTag");
//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/center
class Center extends UnattributedTag_1.UnattributedTag {
    constructor(children) {
        super("center", children);
    }
    static withAttributes(attri, children) {
        var tag = new Center(children);
        tag.attrs(attri);
        return tag;
    }
}
exports.default = Center;
