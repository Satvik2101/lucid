"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UnattributedTag_1 = require("../utils/UnattributedTag");
//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/bdi
class Bdi extends UnattributedTag_1.UnattributedTag {
    constructor(children) {
        super("bdi", children);
    }
    static withAttributes(attri, children) {
        var tag = new Bdi(children);
        tag.attrs(attri);
        return tag;
    }
}
exports.default = Bdi;
