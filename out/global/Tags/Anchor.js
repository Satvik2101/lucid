"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimpleAnchorTag = exports.Anchor = void 0;
const Tag_1 = require("../../Tag");
class Anchor extends Tag_1.ClassIDTag {
    constructor(props) {
        super({ name: "a", class: props.anchorClass, id: props.id, children: props.children, otherAttributes: { href: props.href, target: props.target } });
    }
}
exports.Anchor = Anchor;
class SimpleAnchorTag extends Anchor {
    constructor(props) {
        super({ href: props.href, target: props.target, children: [props.linkText], anchorClass: props.anchorClass, id: props.id });
    }
}
exports.SimpleAnchorTag = SimpleAnchorTag;
