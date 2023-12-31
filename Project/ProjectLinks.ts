import Div from "../Div";
import { ClassIDTag } from "../Tag";
import { Anchor } from "../global/Tags/Anchor";
import Link from "../interface/Link";


class ProjectLink extends Anchor {
    constructor(props: Link) {
        var icon = "";
        if (props.name == "App Store") {
            icon = "fa-brands fa-app-store fa-2x";
        } else if (props.name == "Play Store") {
            icon = "fab fa-google-play fa-2x";
        } else if (props.name == "Github") {
            icon = "fab fa-github fa-2x";
        } else if (props.name == "Website") {
            icon = "fas fa-link fa-2x";
        }
        super({
            href: props.url, children: [
                new ClassIDTag({
                    name: "span", class: "project_link", children: [
                        new ClassIDTag({
                            name: "i",
                            class: icon,
                        })
                    ]
                })
            ]
        });
    }
}

class ProjectLinks extends Div {
    constructor(props: { links: Link[] }) {
        super({
            divClass: "project_links",
            children: props.links.map((link) => new ProjectLink(link))
        });
    }
}

export default ProjectLinks;