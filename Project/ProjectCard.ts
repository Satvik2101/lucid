import Div from "../Div";
import { Tag } from "../Tag";
import UnorderedList from "../global/Tags/UnorderedList";
import TechStack from "../global/TechStack";
import Project from "../interface/Project";
import ProjectImage from "./ProjectImage";
import ProjectLinks from "./ProjectLinks";

class ProjectPoints extends Div {
    constructor(props: { points: string[] }) {
        super({ divClass: "project_por_points", children: new UnorderedList(props.points) })
    }
}

class ProjectDetails extends Div {
    constructor(props: Project) {
        super({
            divClass: "project_details",
            children: [
                new Div({
                    divClass: "project_title", children: [
                        new Tag("h3", { class: "project_title_first" }, props.name),
                        props.product ? new Tag("h3", { class: "project_title_second" }, props.product) : "",

                    ]
                },),
                new ProjectLinks({ links: props.links }),
                props.role ? new Div({ divClass: "por_designation", children: props.role }) : "",
                new ProjectPoints({ points: props.points }),
                new TechStack(props.techstack),
            ]
        })
    }
}

class ProjectCard extends Div {
    constructor(props: { project: Project, isEven: Boolean }) {
        if (props.project.product != null) {
            props.project.name = props.project.name + "'s"
        }

        var style: string = "";
        if (props.isEven == true) {
            style = "flex-direction:row-reverse;";
        } else {
            style = "flex-direction:row;";
        }
        console.log(style)
        super({
            divClass: "project_card",
            style: style,
            children: [
                new ProjectDetails(props.project),
                props.project.image ? new ProjectImage({
                    src: props.project.image,

                    name: props.project.name,
                    alt: props.project.alt,
                    isEven: props.isEven
                }) : "",
            ],
        })
    }
}

export default ProjectCard;