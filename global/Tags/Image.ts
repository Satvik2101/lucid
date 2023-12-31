import { SelfClosingTag } from "../../Tag";

class Image extends SelfClosingTag {
    constructor(props: { src: string, alt?: string, class?: string, style?: string, id?: string }) {
        super("img", { src: props.src, alt: props.alt, class: props.class, id: props.id, style: props.style })
    }
}

export default Image;