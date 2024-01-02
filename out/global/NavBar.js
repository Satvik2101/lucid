"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Div_1 = __importDefault(require("../Div"));
const Tag_1 = require("../Tag");
const Anchor_1 = require("./Tags/Anchor");
var navbarLinksList = [
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
];
class NavbarLink extends Div_1.default {
    constructor(props) {
        super({
            divClass: "navbar_link", id: `${props.short}_link`, children: [
                new Anchor_1.SimpleAnchorTag({ href: `/#${props.short}`, linkText: props.name, target: "_self" })
            ]
        });
    }
}
class NavbarLinks extends Div_1.default {
    constructor(links) {
        super({ id: "navbar_links", children: links.map((link) => new NavbarLink(link)) });
    }
}
class Navbar extends Div_1.default {
    constructor() {
        super({
            id: "navbar", onclick: " ", children: [
                new Div_1.default({
                    id: "navbar_text", children: [
                        "satvik",
                        new Tag_1.Tag("i", { id: "dropdown-arrow", class: "fa-solid fa-caret-down fa-xs", }, [])
                    ]
                }),
                new NavbarLinks(navbarLinksList)
            ]
        });
    }
}
exports.default = Navbar;
