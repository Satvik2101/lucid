"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Div_1 = __importDefault(require("../tags/Div"));
const I_1 = __importDefault(require("../tags/I"));
const SimpleAnchor_1 = __importDefault(require("../utils/SimpleAnchor"));
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
        pre: "/"
    },
    {
        name: "Contact",
        short: "contact",
    },
];
class NavbarLink extends Div_1.default {
    constructor(props) {
        var _a;
        super(new SimpleAnchor_1.default({ href: `${(_a = props.pre) !== null && _a !== void 0 ? _a : "#"}${props.short}`, linkText: props.name }).target("_self"));
        super.class("navbar_link");
        super.id(`${props.short}_link`);
    }
}
class NavbarLinks extends Div_1.default {
    constructor(links) {
        super(links.map((link) => new NavbarLink(link)));
        super.id("navbar_links");
    }
}
class Navbar extends Div_1.default {
    constructor() {
        super([
            new Div_1.default([
                "satvik",
                new I_1.default().id("dropdown-arrow").class("fa-solid fa-caret-down fa-xs"),
            ]).id("navbar_text"),
            new NavbarLinks(navbarLinksList)
        ]);
        super.id("navbar");
        super.on("click", " ");
    }
}
exports.default = Navbar;
