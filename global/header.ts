import { Tag, MetaTag, StylesheetTag, SelfClosingTag, EmptyTag, LinkTag } from "../Tag";
import html from "../html";


interface HeaderProps {
    title?: string;
    description?: string;
    image?: string;
    url?: string;
    stylesheets?: string[];
    stylesheetTags?: StylesheetTag[];
}

class Header extends Tag {
    constructor(props: HeaderProps) {
        const titleTag = props.title ? new Tag("title", {}, [props.title]) : "";
        const ogTitle = props.title ? new MetaTag({ property: "og:title", content: props.title }) : "";
        const ogDescription = props.description ? new MetaTag({ property: "og:description", content: props.description }) : "";
        const description = props.description ? new MetaTag({ name: "description", content: props.description }) : "";
        const ogImage = props.image ? new MetaTag({ property: "og:image", content: props.image }) : "";
        const ogUrl = props.url ? new MetaTag({ property: "og:url", content: props.url }) : "";
        var stylesheets = props.stylesheets?.map((stylesheet) => {
            return new StylesheetTag({ href: stylesheet });
        });
        stylesheets = [...(stylesheets ?? []), ...(props.stylesheetTags ?? [])]

        super("head", {}, [
            new MetaTag({ charset: "UTF-8" }),
            new MetaTag({ "http-equiv": "X-UA-Compatible", content: "IE=edge" }),
            new MetaTag({ name: "viewport", content: "width=device-width, initial-scale=1.0" }),
            new EmptyTag("base", { target: "_blank", rel: "noreferrer noopener" }),
            new LinkTag({ rel: "icon", href: "/favicon.ico", type: "image/x-icon" }),
            description,
            ogTitle,
            ogDescription,
            ogImage,
            ogUrl,
            new LinkTag({ rel: "canonical", href: "https://www.satvikgupta.com" }),
            new LinkTag({ rel: "preconnect", href: "https://fonts.googleapis.com" }),
            new LinkTag({ rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" }),
            ...(stylesheets ?? []),
            titleTag


        ])
        // return new Tag("head", {}, body)
    }
}

class DefaultHeader extends Header {

    constructor() {
        super({
            title: "Satvik Gupta",
            description: "I'm Satvik Gupta, a Software Developer. This is my Portfolio Website.",
            image: "https://www.satvikgupta.com/images/preview.png",
            url: "https://www.satvikgupta.com",
            stylesheets: [
                "https://fonts.googleapis.com/css2?family=Open+Sans&family=Righteous:wght@400;900&family=Roboto+Slab:wght@400;700&family=Cinzel+Decorative:wght@900&family=Black+Ops+One&display=swap",
                "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css",
                "/styles.css"
            ],

        })
    }
}

export { Header, DefaultHeader };