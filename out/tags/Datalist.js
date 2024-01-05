"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UnattributedTag_1 = require("../utils/UnattributedTag");
//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/datalist
class Datalist extends UnattributedTag_1.UnattributedTag {
    constructor(children) {
        super("datalist", children);
    }
    static withAttributes(attri, children) {
        var tag = new Datalist(children);
        tag.attrs(attri);
        return tag;
    }
}
exports.default = Datalist;
