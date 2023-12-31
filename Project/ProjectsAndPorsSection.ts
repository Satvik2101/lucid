import Div from "../Div";
import { Tag } from "../Tag";
import HorizontalBreak from "../global/Tags/HorizontalBreak";
import Project from "../interface/Project";
import ProjectCard from "./ProjectCard";

class ProjectsSectionStart extends Div {
    constructor() {
        super({
            id: "projects_section_start",
            children: [
                new Tag("h2", { class: "section_title" }, [
                    "What I've Created",
                    new Tag("span", { class: "separator_line" }, "")
                ]),
                "I've worked on a lot of projects, both personal and professional, and have held Positions of Responsibility as a student.",
                new HorizontalBreak(),
                "Here are some of them."
            ]

        })
    }
}

class ProjectsAndPorsSection extends Div {
    constructor(props: { projects: Project[], pors: Project[] }) {
        const totalProjects = [...props.pors, ...props.projects]
        super({
            id: "projects",
            divClass: "section",
            children: [
                new ProjectsSectionStart(),
                new Div({
                    id: "projects_and_pors_cards_and_description",
                    children: totalProjects.map(
                        (project, index) => new ProjectCard({
                            project: project, isEven: index % 2 == 0
                        })
                    )
                })
            ]
        })
    }
}

export default ProjectsAndPorsSection;