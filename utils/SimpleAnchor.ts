import A from "../tags/A";

class SimpleAnchor extends A {
    constructor(props: { href: string, linkText: string }) {
        super(props.linkText);
        this.href(props.href);
    }
}

export default SimpleAnchor;