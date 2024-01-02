"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Tag_1 = require("../../Tag");
class Image extends Tag_1.SelfClosingTag {
    constructor(props) {
        super("img", { src: props.src, alt: props.alt, class: props.class, id: props.id, style: props.style });
    }
}
exports.default = Image;
