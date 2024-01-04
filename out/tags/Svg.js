"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UnattributedTag_1 = require("../utils/UnattributedTag");
//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/svg
class Svg extends UnattributedTag_1.UnattributedTag {
    constructor(children) {
        super("svg", children);
    }
    static withAttributes(attri, children) {
        var tag = new Svg(children);
        tag.attrs(attri);
        return tag;
    }
}
exports.default = Svg;
