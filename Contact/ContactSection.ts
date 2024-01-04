import Br from "../tags/Br";
import Div from "../tags/Div";
import H2 from "../tags/H2";
import H3 from "../tags/H3";
import EnhancedDiv from "../utils/EnhancedDiv";
import EnhancedImg from "../utils/EnhancedImg";
import SimpleAnchor from "../utils/SimpleAnchor";


class ContactSection extends EnhancedDiv {
    constructor() {
        super({
            class: "section",
            id: "contact",
            children: [
                new H2("Contact").class("section_title"),
                new Br(),
                new Div(
                    [
                        new Div(
                            [
                                new H3("Let's build something great together."),
                                new Br(),
                                "Want to collaborate on a project? Or just want to say hi?",
                                new Br(),
                                new Br(),
                                "Get in touch with me via email at",
                                new SimpleAnchor({ href: "mailto:hello@satvikgupta.com", linkText: "hello@satvikgupta.com" }),
                            ]
                        ).id("contact_left"), //contact_left
                        new Div(
                            [
                                new EnhancedImg({ src: "./images/Dashatar.png", alt: "Dashatar" }),
                            ]
                        ).id("contact_right") //contact_right
                    ]
                ).id("contact_flex_box"),
            ]
        })


    }
}

export default ContactSection;