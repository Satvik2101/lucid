"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const A_1 = __importDefault(require("../tags/A"));
const Div_1 = __importDefault(require("../tags/Div"));
const EnhancedImg_1 = __importDefault(require("../utils/EnhancedImg"));
class ArcReactor extends Div_1.default {
    constructor() {
        var children = [
            new A_1.default([
                new EnhancedImg_1.default({
                    src: "./images/arcblue.png",
                    alt: "nav_bar_logo",
                })
            ]).href("#home").target("_self")
        ];
        super(children);
        super.id("arc_reactor");
    }
}
exports.default = ArcReactor;
