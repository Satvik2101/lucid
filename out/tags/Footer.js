"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UnattributedTag_1 = require("../utils/UnattributedTag");
//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/footer
class Footer extends UnattributedTag_1.UnattributedTag {
    constructor(children) {
        super("footer", children);
    }
    static withAttributes(attri, children) {
        var tag = new Footer(children);
        tag.attrs(attri);
        return tag;
    }
}
exports.default = Footer;
