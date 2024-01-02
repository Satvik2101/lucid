"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Div_1 = __importDefault(require("../Div"));
const Tag_1 = require("../Tag");
class NameAndDesignation extends Div_1.default {
    constructor() {
        super({
            id: "name_and_desig",
            divClass: "padded_centered",
            children: [
                new Tag_1.ClassIDTag({ name: "h1", children: "> Hi. I'm Satvik Gupta.", id: "name_heading" }),
                new Tag_1.ClassIDTag({ name: "p", children: "Software Developer", id: "designation" })
            ]
        });
    }
}
exports.default = NameAndDesignation;
