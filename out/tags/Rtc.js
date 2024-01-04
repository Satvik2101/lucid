"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UnattributedTag_1 = require("../utils/UnattributedTag");
//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/rtc
class Rtc extends UnattributedTag_1.UnattributedTag {
    constructor(children) {
        super("rtc", children);
    }
    static withAttributes(attri, children) {
        var tag = new Rtc(children);
        tag.attrs(attri);
        return tag;
    }
}
exports.default = Rtc;
