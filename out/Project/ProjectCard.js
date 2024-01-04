"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const H3_1 = __importDefault(require("../tags/H3"));
const EnhancedDiv_1 = __importDefault(require("../utils/EnhancedDiv"));
const List_1 = require("../utils/List");
const TechStack_1 = __importDefault(require("../global/TechStack"));
const ProjectImage_1 = __importDefault(require("./ProjectImage"));
const ProjectLinks_1 = __importDefault(require("./ProjectLinks"));
class ProjectPoints extends EnhancedDiv_1.default {
    constructor(props) {
        super({ class: "project_por_points", children: new List_1.SimpleUnorderedList(props.points) });
    }
}
class ProjectDetails extends EnhancedDiv_1.default {
    constructor(props) {
        super({
            class: "project_details",
            children: [
                new EnhancedDiv_1.default({
                    class: "project_title", children: [
                        new H3_1.default().class("project_title_first").p(props.name),
                        props.product ? new H3_1.default().class("project_title_second").p(props.product) : "",
                    ]
                }),
                new ProjectLinks_1.default({ links: props.links }),
                props.role ? new EnhancedDiv_1.default({ class: "por_designation", children: props.role }) : "",
                new ProjectPoints({ points: props.points }),
                new TechStack_1.default(props.techstack),
            ]
        });
    }
}
class ProjectCard extends EnhancedDiv_1.default {
    constructor(props) {
        if (props.project.product != null) {
            props.project.name = props.project.name + "'s";
        }
        var style = "";
        if (props.isEven == true) {
            style = "flex-direction:row-reverse;";
        }
        else {
            style = "flex-direction:row;";
        }
        console.log(style);
        super({
            class: "project_card",
            children: [
                new ProjectDetails(props.project),
                props.project.image ? new ProjectImage_1.default({
                    src: props.project.image,
                    name: props.project.name,
                    alt: props.project.alt,
                    isEven: props.isEven
                }) : "",
            ],
        });
        this.style(style);
    }
}
exports.default = ProjectCard;
