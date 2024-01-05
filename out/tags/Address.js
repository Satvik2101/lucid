"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UnattributedTag_1 = require("../utils/UnattributedTag");
//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/address
class Address extends UnattributedTag_1.UnattributedTag {
    constructor(children) {
        super("address", children);
    }
    static withAttributes(attri, children) {
        var tag = new Address(children);
        tag.attrs(attri);
        return tag;
    }
}
exports.default = Address;
