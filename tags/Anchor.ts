import { Tag, childrenType } from "./Tag";

class Anchor extends Tag {
    constructor(href: string, children?: childrenType) {
        super("a", children, { href: href });
    }

    href(value: string) {
        this.setAttr("href", value);
    }

    target(value: string) {
        this.setAttr("target", value);
    }


}
class SimpleAnchorTag extends Anchor {
    constructor(href: string, linkText: string) {
        super(href, linkText);
    }
}

export { Anchor, SimpleAnchorTag };