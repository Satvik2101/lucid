"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const A_1 = __importDefault(require("../tags/A"));
class SimpleAnchor extends A_1.default {
    constructor(props) {
        super(props.linkText);
        this.href(props.href);
    }
}
exports.default = SimpleAnchor;
