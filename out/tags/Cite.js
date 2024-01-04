"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UnattributedTag_1 = require("../utils/UnattributedTag");
//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/cite
class Cite extends UnattributedTag_1.UnattributedTag {
    constructor(children) {
        super("cite", children);
    }
    static withAttributes(attri, children) {
        var tag = new Cite(children);
        tag.attrs(attri);
        return tag;
    }
}
exports.default = Cite;
