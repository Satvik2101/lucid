"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Div_1 = __importDefault(require("../Div"));
const Anchor_1 = require("../global/Tags/Anchor");
const Image_1 = __importDefault(require("../global/Tags/Image"));
class ArcReactor extends Div_1.default {
    constructor() {
        super({
            id: "arc_reactor", children: [
                new Anchor_1.Anchor({
                    href: "#home",
                    target: "_self",
                    children: [
                        new Image_1.default({
                            src: "./images/arcblue.png",
                            alt: "nav_bar_logo",
                        })
                    ]
                })
            ]
        });
    }
}
exports.default = ArcReactor;
