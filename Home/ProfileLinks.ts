import Div from "../Div"
import { Tag } from "../Tag"
import { Anchor } from "../global/Tags/Anchor"
import Image from "../global/Tags/Image"

class ProfileLinkIcon extends Image {
    constructor(props: { src: string, alt: string, id?: string }) {
        super({ ...props, class: "profile_link_icon" })
    }
}


class ProfileLinkButton extends Anchor {
    constructor(props: { href: string, name: string, shortName: string, imgSrc?: string, customChild?: Tag }) {

        super({
            href: props.href,
            anchorClass: "profile_link_button",
            id: `${props.shortName}_button`,
            children: [props.customChild ?
                props.customChild
                : new ProfileLinkIcon({
                    src: props.imgSrc as string,
                    alt: props.shortName,
                    id: props.shortName + "_icon"
                }),
            props.name,
            ],

        })
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
        customChild: new Tag("span", { id: "resume_icon" }, [])
    }
]

class ProfileLinks extends Div {

    constructor() {
        super({
            id: "profile_links",
            children: ProfileLinksData.map((linkData) => new ProfileLinkButton(linkData)),
            divClass: "padded_centered"
        })
    }

}

export default ProfileLinks;