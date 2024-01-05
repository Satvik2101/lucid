"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UnattributedTag_1 = require("../utils/UnattributedTag");
//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/article
class Article extends UnattributedTag_1.UnattributedTag {
    constructor(children) {
        super("article", children);
    }
    static withAttributes(attri, children) {
        var tag = new Article(children);
        tag.attrs(attri);
        return tag;
    }
}
exports.default = Article;
