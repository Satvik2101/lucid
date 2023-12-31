import Div from "../Div";
import { ClassIDTag, Tag } from "../Tag";
import { SimpleAnchorTag } from "../global/Tags/Anchor";
import HorizontalBreak from "../global/Tags/HorizontalBreak";
import Image from "../global/Tags/Image";

class ContactSection extends Div {
    constructor() {
        super({
            divClass: "section",
            id: "contact",
            children: [
                new ClassIDTag({ name: "h2", class: "section_title", children: ["Contact"] }),
                new HorizontalBreak(),
                new Div({
                    id: "contact_flex_box",
                    children: [
                        new Div({
                            id: "contact_left",
                            children: [
                                new Tag("h3", {}, "Let's build something great together."),
                                new HorizontalBreak(),
                                "Want to collaborate on a project? Or just want to say hi?",
                                new HorizontalBreak(),
                                new HorizontalBreak(),
                                "Get in touch with me via email at",
                                new SimpleAnchorTag({ href: "mailto:hello@satvikgupta.com", linkText: "hello@satvikgupta.com" }),



                            ]
                        }), //contact_left
                        new Div({
                            id: "contact_right",
                            children: [
                                new Image({ src: "./images/Dashatar.png", alt: "Dashatar" }),
                            ]
                        }) //contact_right
                    ]
                })
            ]
        })


    }
}

export default ContactSection;