"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Div_1 = __importDefault(require("../Div"));
const Tag_1 = require("../Tag");
const UnorderedList_1 = __importDefault(require("../global/Tags/UnorderedList"));
const TechStack_1 = __importDefault(require("../global/TechStack"));
const ProjectImage_1 = __importDefault(require("./ProjectImage"));
const ProjectLinks_1 = __importDefault(require("./ProjectLinks"));
class ProjectPoints extends Div_1.default {
    constructor(props) {
        super({ divClass: "project_por_points", children: new UnorderedList_1.default(props.points) });
    }
}
class ProjectDetails extends Div_1.default {
    constructor(props) {
        super({
            divClass: "project_details",
            children: [
                new Div_1.default({
                    divClass: "project_title", children: [
                        new Tag_1.Tag("h3", { class: "project_title_first" }, props.name),
                        props.product ? new Tag_1.Tag("h3", { class: "project_title_second" }, props.product) : "",
                    ]
                }),
                new ProjectLinks_1.default({ links: props.links }),
                props.role ? new Div_1.default({ divClass: "por_designation", children: props.role }) : "",
                new ProjectPoints({ points: props.points }),
                new TechStack_1.default(props.techstack),
            ]
        });
    }
}
class ProjectCard extends Div_1.default {
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
            divClass: "project_card",
            style: style,
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
    }
}
exports.default = ProjectCard;
