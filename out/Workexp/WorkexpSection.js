"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const WorkexpCard_1 = __importDefault(require("./WorkexpCard"));
const Chooser_1 = __importDefault(require("./Chooser"));
const EnhancedDiv_1 = __importDefault(require("../utils/EnhancedDiv"));
const H2_1 = __importDefault(require("../tags/H2"));
const Span_1 = __importDefault(require("../tags/Span"));
class WorkexpSection extends EnhancedDiv_1.default {
    constructor(workexp) {
        super({
            class: "section", id: "workexp", children: [
                new EnhancedDiv_1.default({
                    id: "workexp_section_start", children: [
                        new H2_1.default().class("section_title").p(["Where I've Worked",
                            new Span_1.default().class("separator_line").p(""),
                        ]),
                        "I've been lucky enough to be able to work for some amazing companies and organizations. Here are some of them."
                    ]
                }), //workexp_section_start
                new EnhancedDiv_1.default({
                    id: "workexp_cards_container",
                    children: [
                        new Chooser_1.default(workexp),
                        ...workexp.map((workexp, idx) => new WorkexpCard_1.default(workexp, idx))
                    ]
                }),
            ]
        });
    }
}
exports.default = WorkexpSection;
