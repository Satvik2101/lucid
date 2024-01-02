"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Div_1 = __importDefault(require("../Div"));
const Image_1 = __importDefault(require("../global/Tags/Image"));
class ProjectImage extends Div_1.default {
    constructor(props) {
        if (props.alt === undefined)
            props.alt = props.name;
        if (props.src == undefined) {
            super({});
            return;
        }
        var style = "";
        var imgStyle = "";
        if (props.isEven) {
            style = "margin-left:0;margin-right:2em;";
            imgStyle = "float:right";
        }
        else {
            style = "margin-right:0;margin-left:2em;";
            imgStyle = "float:left";
        }
        super({
            divClass: "project_image",
            style: style,
            children: new Image_1.default({ src: props.src, alt: props.alt, style: imgStyle })
        });
    }
}
exports.default = ProjectImage;
