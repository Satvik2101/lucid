"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Div_1 = __importDefault(require("../Div"));
const Tag_1 = require("../Tag");
const WorkexpCard_1 = __importDefault(require("./WorkexpCard"));
const Chooser_1 = __importDefault(require("./Chooser"));
class WorkexpSection extends Div_1.default {
    constructor(workexp) {
        super({
            divClass: "section", id: "workexp", children: [
                new Div_1.default({
                    id: "workexp_section_start", children: [
                        new Tag_1.Tag("h2", { class: "section_title" }, [
                            "Where I've Worked",
                            new Tag_1.Tag("span", { class: "separator_line" }, [])
                        ]),
                        "I've been lucky enough to be able to work for some amazing companies and organizations. Here are some of them."
                    ]
                }), //workexp_section_start
                new Div_1.default({
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
