"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const EnhancedDiv_1 = __importDefault(require("../utils/EnhancedDiv"));
const EnhancedImg_1 = __importDefault(require("../utils/EnhancedImg"));
class ProjectImage extends EnhancedDiv_1.default {
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
            class: "project_image",
            children: new EnhancedImg_1.default({ src: props.src, alt: props.alt }).style(imgStyle)
        });
        this.style(style);
    }
}
exports.default = ProjectImage;
