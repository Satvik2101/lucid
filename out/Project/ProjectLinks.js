"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Div_1 = __importDefault(require("../Div"));
const Tag_1 = require("../Tag");
const Anchor_1 = require("../global/Tags/Anchor");
class ProjectLink extends Anchor_1.Anchor {
    constructor(props) {
        var icon = "";
        if (props.name == "App Store") {
            icon = "fa-brands fa-app-store fa-2x";
        }
        else if (props.name == "Play Store") {
            icon = "fab fa-google-play fa-2x";
        }
        else if (props.name == "Github") {
            icon = "fab fa-github fa-2x";
        }
        else if (props.name == "Website") {
            icon = "fas fa-link fa-2x";
        }
        super({
            href: props.url, children: [
                new Tag_1.ClassIDTag({
                    name: "span", class: "project_link", children: [
                        new Tag_1.ClassIDTag({
                            name: "i",
                            class: icon,
                        })
                    ]
                })
            ]
        });
    }
}
class ProjectLinks extends Div_1.default {
    constructor(props) {
        super({
            divClass: "project_links",
            children: props.links.map((link) => new ProjectLink(link))
        });
    }
}
exports.default = ProjectLinks;
