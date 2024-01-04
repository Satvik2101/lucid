"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UnattributedTag_1 = require("../utils/UnattributedTag");
//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/h5
class H5 extends UnattributedTag_1.UnattributedTag {
    constructor(children) {
        super("h5", children);
    }
    static withAttributes(attri, children) {
        var tag = new H5(children);
        tag.attrs(attri);
        return tag;
    }
}
exports.default = H5;
