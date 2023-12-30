import Div from "../Div";
import { Tag } from "../Tag";
import { SimpleAnchorTag } from "./Tags/Anchor";
interface NavbarLinkInterface {
    name: string;
    short: string;
}
var navbarLinksList: NavbarLinkInterface[] = [
    {
        name: "Home",
        short: "home",
    },
    {
        name: "Work Experience",
        short: "workexp",
    },
    {
        name: "Projects",
        short: "projects",
    },
    {
        name: "Notes",
        short: "notes",
    },
    {
        name: "Contact",
        short: "contact",
    },

]

class NavbarLink extends Div {
    constructor(props: NavbarLinkInterface) {
        super({
            divClass: "navbar_link", id: `${props.short}_link`, children: [
                new SimpleAnchorTag({ href: `/#${props.short}`, linkText: props.name, target: "_self" })
            ]
        })
    }
}

class NavbarLinks extends Div {
    constructor(links: NavbarLinkInterface[]) {
        super({ id: "navbar_links", children: links.map((link) => new NavbarLink(link)) })
    }
}

class Navbar extends Div {
    constructor() {
        super({
            id: "navbar", onclick: " ", children: [
                new Div({
                    id: "navbar_text", children: [
                        "satvik",
                        new Tag("i", { id: "dropdown-arrow", class: "fa-solid fa-caret-down fa-xs", }, [])
                    ]
                }),
                new NavbarLinks(navbarLinksList)
            ]
        })
    }
}

export default Navbar;