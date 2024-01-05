"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Tag_1 = require("../utils/Tag");
//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meter
class Meter extends Tag_1.Tag {
    constructor(children) {
        super("meter", children);
    }
    form(value) {
        if (value)
            this.setAttr("form", value);
        return this;
    }
    high(value) {
        if (value)
            this.setAttr("high", value);
        return this;
    }
    low(value) {
        if (value)
            this.setAttr("low", value);
        return this;
    }
    max(value) {
        if (value)
            this.setAttr("max", value);
        return this;
    }
    min(value) {
        if (value)
            this.setAttr("min", value);
        return this;
    }
    optimum(value) {
        if (value)
            this.setAttr("optimum", value);
        return this;
    }
    value(value) {
        if (value)
            this.setAttr("value", value);
        return this;
    }
    static withAttributes(attri, children) {
        var tag = new Meter(children);
        tag.attrs(attri);
        return tag;
    }
}
exports.default = Meter;
