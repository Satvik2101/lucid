"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Tag_1 = require("../utils/Tag");
//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/output
class Output extends Tag_1.Tag {
    constructor(children) {
        super("output", children);
    }
    for(value) {
        if (value)
            this.setAttr("for", value);
        return this;
    }
    form(value) {
        if (value)
            this.setAttr("form", value);
        return this;
    }
    name(value) {
        if (value)
            this.setAttr("name", value);
        return this;
    }
    static withAttributes(attri, children) {
        var tag = new Output(children);
        tag.attrs(attri);
        return tag;
    }
}
exports.default = Output;
