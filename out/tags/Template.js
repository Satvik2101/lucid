"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UnattributedTag_1 = require("../utils/UnattributedTag");
//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template
class Template extends UnattributedTag_1.UnattributedTag {
    constructor(children) {
        super("template", children);
    }
    static withAttributes(attri, children) {
        var tag = new Template(children);
        tag.attrs(attri);
        return tag;
    }
}
exports.default = Template;
