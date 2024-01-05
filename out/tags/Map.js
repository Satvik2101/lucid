"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Tag_1 = require("../utils/Tag");
//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/map
class Map extends Tag_1.Tag {
    constructor(children) {
        super("map", children);
    }
    name(value) {
        if (value)
            this.setAttr("name", value);
        return this;
    }
    static withAttributes(attri, children) {
        var tag = new Map(children);
        tag.attrs(attri);
        return tag;
    }
}
exports.default = Map;
