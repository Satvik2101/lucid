"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Div_1 = __importDefault(require("../Div"));
const Tag_1 = require("../Tag");
const Anchor_1 = require("../global/Tags/Anchor");
const Image_1 = __importDefault(require("../global/Tags/Image"));
class ProfileLinkIcon extends Image_1.default {
    constructor(props) {
        super(Object.assign(Object.assign({}, props), { class: "profile_link_icon" }));
    }
}
class ProfileLinkButton extends Anchor_1.Anchor {
    constructor(props) {
        super({
            href: props.href,
            anchorClass: "profile_link_button",
            id: `${props.shortName}_button`,
            children: [props.customChild ?
                    props.customChild
                    : new ProfileLinkIcon({
                        src: props.imgSrc,
                        alt: props.shortName,
                        id: props.shortName + "_icon"
                    }),
                props.name,],
        });
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
        customChild: new Tag_1.Tag("span", { id: "resume_icon" }, [])
    }
];
class ProfileLinks extends Div_1.default {
    constructor() {
        super({
            id: "profile_links",
            children: ProfileLinksData.map((linkData) => new ProfileLinkButton(linkData)),
            divClass: "padded_centered"
        });
    }
}
exports.default = ProfileLinks;
