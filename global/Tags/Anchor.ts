import { ClassIDTag, Tag, childrenType } from "../../Tag";

class Anchor extends ClassIDTag {
    constructor(props: { href: string, children: childrenType, target?: string, anchorClass?: string, id?: string }) {
        super({ name: "a", class: props.anchorClass, id: props.id, children: props.children, otherAttributes: { href: props.href, target: props.target } });

    }
}
class SimpleAnchorTag extends Anchor {
    constructor(props: { href: string, linkText: string, target?: string, anchorClass?: string, id?: string }) {
        super({ href: props.href, target: props.target, children: [props.linkText], anchorClass: props.anchorClass, id: props.id });
    }
}

export { Anchor, SimpleAnchorTag };