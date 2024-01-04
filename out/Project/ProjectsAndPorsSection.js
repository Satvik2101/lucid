"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Br_1 = __importDefault(require("../tags/Br"));
const H2_1 = __importDefault(require("../tags/H2"));
const Span_1 = __importDefault(require("../tags/Span"));
const EnhancedDiv_1 = __importDefault(require("../utils/EnhancedDiv"));
const ProjectCard_1 = __importDefault(require("./ProjectCard"));
class ProjectsSectionStart extends EnhancedDiv_1.default {
    constructor() {
        super({
            id: "projects_section_start",
            children: [
                new H2_1.default().class("section_title").p(["What I've Created",
                    new Span_1.default().class("separator_line").p(""),
                ]),
                "I've worked on a lot of projects, both personal and professional, and have held Positions of Responsibility as a student.",
                new Br_1.default(),
                "Here are some of them."
            ]
        });
    }
}
class ProjectsAndPorsSection extends EnhancedDiv_1.default {
    constructor(props) {
        const totalProjects = [...props.pors, ...props.projects];
        super({
            id: "projects",
            class: "section",
            children: [
                new ProjectsSectionStart(),
                new EnhancedDiv_1.default({
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
