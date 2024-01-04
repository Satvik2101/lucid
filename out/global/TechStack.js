"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Div_1 = __importDefault(require("../tags/Div"));
class TechStackItem extends Div_1.default {
    constructor(techStackName) {
        var techStackClass = "tech_stack_item";
        super(techStackName);
        this.class(techStackClass);
    }
}
class TechStack extends Div_1.default {
    constructor(props) {
        super(props.map((techStackName) => new TechStackItem(techStackName)));
        super.class("tech_stack");
    }
}
exports.default = TechStack;
