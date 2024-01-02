"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Div_1 = __importDefault(require("../Div"));
class TechStackItem extends Div_1.default {
    constructor(techStackName) {
        var techStackClass = "tech_stack_item";
        super({ divClass: techStackClass, children: techStackName });
    }
}
class TechStack extends Div_1.default {
    constructor(props) {
        super({ divClass: "tech_stack", children: props.map((techStackName) => new TechStackItem(techStackName)) });
    }
}
exports.default = TechStack;
