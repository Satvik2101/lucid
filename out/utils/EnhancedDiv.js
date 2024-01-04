"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Div_1 = __importDefault(require("../tags/Div"));
class EnhancedDiv extends Div_1.default {
    constructor(props) {
        super(props.children);
        this.class(props.class);
        this.id(props.id);
    }
}
exports.default = EnhancedDiv;
