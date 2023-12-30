import { Tag, childrenType } from "../../Tag";

class Anchor extends Tag {
    constructor(href: string, children: childrenType, target?: string,) {
        super("a", { href: href, target: target ?? "_blank" }, children);
    }
}
class SimpleAnchorTag extends Anchor {
    constructor(href: string, linkText: string, target?: string,) {
        super(href, [linkText], target);
    }
}

export { Anchor, SimpleAnchorTag };