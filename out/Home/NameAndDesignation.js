"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const H1_1 = __importDefault(require("../tags/H1"));
const P_1 = __importDefault(require("../tags/P"));
const EnhancedDiv_1 = __importDefault(require("../utils/EnhancedDiv"));
class NameAndDesignation extends EnhancedDiv_1.default {
    constructor() {
        super({
            id: "name_and_desig",
            class: "padded_centered",
            children: [
                new H1_1.default().id("name_heading").p("> Hi. I'm Satvik Gupta."),
                new P_1.default().id("designation").p("Software Developer"),
            ]
        });
    }
}
exports.default = NameAndDesignation;
