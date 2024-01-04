"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UnattributedTag_1 = require("../utils/UnattributedTag");
//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figure
class Figure extends UnattributedTag_1.UnattributedTag {
    constructor(children) {
        super("figure", children);
    }
    static withAttributes(attri, children) {
        var tag = new Figure(children);
        tag.attrs(attri);
        return tag;
    }
}
exports.default = Figure;
