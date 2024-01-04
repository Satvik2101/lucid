"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UnattributedTag_1 = require("../utils/UnattributedTag");
//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dt
class Dt extends UnattributedTag_1.UnattributedTag {
    constructor(children) {
        super("dt", children);
    }
    static withAttributes(attri, children) {
        var tag = new Dt(children);
        tag.attrs(attri);
        return tag;
    }
}
exports.default = Dt;
