"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Tag_1 = require("../Tag");
const Anchor_1 = require("../global/Tags/Anchor");
const HorizontalBreak_1 = __importDefault(require("../global/Tags/HorizontalBreak"));
class Bio extends Tag_1.ClassIDTag {
    constructor() {
        super({
            name: "p",
            class: "padded_centered", id: "bio",
            children: [
                "Computer Engineering senior at Delhi Technological University.",
                new HorizontalBreak_1.default(),
                "Technology,coding, and programming have been my passions since I wrote my",
                new Anchor_1.SimpleAnchorTag({ href: "https://github.com/Satvik2101/Clean-Folder", linkText: "first Python Script" }),
                "at the age of 15. Building stuff, solving problems, automating tasks, and above all - learning new things - are what I love to do.",
            ],
        });
    }
}
exports.default = Bio;
