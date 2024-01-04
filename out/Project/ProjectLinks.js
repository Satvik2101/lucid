"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const A_1 = __importDefault(require("../tags/A"));
const I_1 = __importDefault(require("../tags/I"));
const Span_1 = __importDefault(require("../tags/Span"));
const EnhancedDiv_1 = __importDefault(require("../utils/EnhancedDiv"));
class ProjectLink extends A_1.default {
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
        super();
        super.href(props.url).p([
            new Span_1.default().class("project_link").p([
                new I_1.default().class(icon)
            ])
        ]);
    }
}
class ProjectLinks extends EnhancedDiv_1.default {
    constructor(props) {
        super({
            class: "project_links",
            children: props.links.map((link) => new ProjectLink(link))
        });
    }
}
exports.default = ProjectLinks;
