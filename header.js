const { Tag, MetaTag, StylesheetTag } = require("./Tag.js");
const html = require("./html.js");


function Header(props) {
    const titleTag = new Tag("title", {}, props.title);
    const ogTitle = new MetaTag({ property: "og:title", content: props.title });
    const ogDescription = new MetaTag({ property: "og:description", content: props.description });
    const description = new MetaTag({ name: "description", content: props.description });
    const ogImage = new MetaTag({ property: "og:image", content: props.image });
    const ogUrl = new MetaTag({ property: "og:url", content: props.url });
    var stylesheets = props.stylesheets.map((stylesheet) => {
        return new StylesheetTag({ href: stylesheet });
    });
    stylesheets = [...stylesheets, props.stylesheetTags]

    var body = html`
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <base target="_blank" rel="noreferrer noopener">
    <link rel="icon" href="/favicon.ico" type="image/x-icon">

    ${description}
    ${ogTitle}
    ${ogDescription}
    ${ogImage}
    ${ogUrl}

    <link rel="canonical" href="https://www.satvikgupta.com">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    ${stylesheets.reduce((prev, curr) => prev + (curr || "").toString() + "\n", "")}
    ${titleTag}`;

    return new Tag("head", {}, body)
}

function DefaultHeader() {
    return header({
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

module.exports = { Header, DefaultHeader };