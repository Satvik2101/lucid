"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnattributedTag = void 0;
const Tag_1 = require("./Tag");
//Tags that don't have standard attributes associated with them.
// i.e, their most common use is to be a container for other tags.
// They are most commonly used without any attributes.
class UnattributedTag extends Tag_1.Tag {
    constructor(tagName, children) {
        super(tagName, children);
    }
}
exports.UnattributedTag = UnattributedTag;
