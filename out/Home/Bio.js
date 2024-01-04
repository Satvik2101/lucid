"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Br_1 = __importDefault(require("../tags/Br"));
const P_1 = __importDefault(require("../tags/P"));
const SimpleAnchor_1 = __importDefault(require("../utils/SimpleAnchor"));
class Bio extends P_1.default {
    constructor() {
        super();
        this.class("padded_centered").id("bio").p([
            "Computer Engineering senior at Delhi Technological University.",
            new Br_1.default(),
            "Technology,coding, and programming have been my passions since I wrote my",
            new SimpleAnchor_1.default({ href: "https://github.com/Satvik2101/Clean-Folder", linkText: "first Python Script" }),
            "at the age of 15. Building stuff, solving problems, automating tasks, and above all - learning new things - are what I love to do.",
        ]);
    }
}
exports.default = Bio;
