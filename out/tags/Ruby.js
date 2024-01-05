"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UnattributedTag_1 = require("../utils/UnattributedTag");
//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ruby
class Ruby extends UnattributedTag_1.UnattributedTag {
    constructor(children) {
        super("ruby", children);
    }
    static withAttributes(attri, children) {
        var tag = new Ruby(children);
        tag.attrs(attri);
        return tag;
    }
}
exports.default = Ruby;
