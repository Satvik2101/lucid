"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Div_1 = __importDefault(require("../Div"));
const Tag_1 = require("../Tag");
const HorizontalBreak_1 = __importDefault(require("../global/Tags/HorizontalBreak"));
const ProjectCard_1 = __importDefault(require("./ProjectCard"));
class ProjectsSectionStart extends Div_1.default {
    constructor() {
        super({
            id: "projects_section_start",
            children: [
                new Tag_1.Tag("h2", { class: "section_title" }, [
                    "What I've Created",
                    new Tag_1.Tag("span", { class: "separator_line" }, "")
                ]),
                "I've worked on a lot of projects, both personal and professional, and have held Positions of Responsibility as a student.",
                new HorizontalBreak_1.default(),
                "Here are some of them."
            ]
        });
    }
}
class ProjectsAndPorsSection extends Div_1.default {
    constructor(props) {
        const totalProjects = [...props.pors, ...props.projects];
        super({
            id: "projects",
            divClass: "section",
            children: [
                new ProjectsSectionStart(),
                new Div_1.default({
                    id: "projects_and_pors_cards_and_description",
                    children: totalProjects.map((project, index) => new ProjectCard_1.default({
                        project: project, isEven: index % 2 == 0
                    }))
                })
            ]
        });
    }
}
exports.default = ProjectsAndPorsSection;
