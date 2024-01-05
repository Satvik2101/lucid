"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UnattributedTag_1 = require("../utils/UnattributedTag");
//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/search
class Search extends UnattributedTag_1.UnattributedTag {
    constructor(children) {
        super("search", children);
    }
    static withAttributes(attri, children) {
        var tag = new Search(children);
        tag.attrs(attri);
        return tag;
    }
}
exports.default = Search;
