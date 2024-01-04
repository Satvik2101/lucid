"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Img_1 = __importDefault(require("../tags/Img"));
class EnhancedImg extends Img_1.default {
    constructor(props) {
        super();
        this.src(props.src);
        this.alt(props.alt);
    }
}
exports.default = EnhancedImg;
