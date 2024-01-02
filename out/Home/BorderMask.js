"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Div_1 = __importDefault(require("../Div"));
class BorderMask extends Div_1.default {
    constructor() {
        super({
            divClass: "border_mask", children: [
                new Div_1.default({ id: "mask_top" }),
                new Div_1.default({ id: "mask_right" }),
                new Div_1.default({ id: "mask_bottom" }),
                new Div_1.default({ id: "mask_left" })
            ]
        });
    }
    ;
}
exports.default = BorderMask;
