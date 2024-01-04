"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const A_1 = __importDefault(require("../tags/A"));
const Span_1 = __importDefault(require("../tags/Span"));
const EnhancedDiv_1 = __importDefault(require("../utils/EnhancedDiv"));
const EnhancedImg_1 = __importDefault(require("../utils/EnhancedImg"));
class ProfileLinkIcon extends EnhancedImg_1.default {
    constructor(props) {
        super(props);
        this.class("profile_link_icon");
    }
}
class ProfileLinkButton extends A_1.default {
    constructor(props) {
        super();
        super.href(props.href)
            .class("profile_link_button")
            .id(`${props.shortName}_button`)
            .p([props.customChild ?
                props.customChild
                : new ProfileLinkIcon({
                    src: props.imgSrc,
                    alt: props.shortName,
                    id: props.shortName + "_icon"
                }),
            props.name,]);
    }
}
const ProfileLinksData = [
    {
        href: "https://www.github.com/Satvik2101",
        shortName: "github",
        name: "GitHub",
        imgSrc: "./images/github_icon_2.png",
    },
    {
        href: "https://www.linkedin.com/in/satvik-g/",
        shortName: "linkedin",
        name: "LinkedIn",
        imgSrc: "./images/linkedin_icon_circular.png",
    },
    {
        href: "https://www.satvikgupta.com/satvik-gupta-resume.pdf",
        shortName: "resume",
        name: "Resume",
        customChild: new Span_1.default().id("resume_icon"),
    }
];
class ProfileLinks extends EnhancedDiv_1.default {
    constructor() {
        super({
            id: "profile_links",
            children: ProfileLinksData.map((linkData) => new ProfileLinkButton(linkData)),
            class: "padded_centered"
        });
    }
}
exports.default = ProfileLinks;
