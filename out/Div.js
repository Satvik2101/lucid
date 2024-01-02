"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Tag_1 = require("./Tag");
class Div extends Tag_1.ClassIDTag {
    constructor(props) {
        var attri = {
            onclick: props.onclick,
            style: props.style
        };
        super({ name: "div", children: props.children, class: props.divClass, id: props.id, otherAttributes: attri });
    }
}
exports.default = Div;
