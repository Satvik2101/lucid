"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Tag_1 = require("../utils/Tag");
//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/time
class Time extends Tag_1.Tag {
    constructor(children) {
        super("time", children);
    }
    datetime(value) {
        if (value)
            this.setAttr("datetime", value);
        return this;
    }
    static withAttributes(attri, children) {
        var tag = new Time(children);
        tag.attrs(attri);
        return tag;
    }
}
exports.default = Time;
