import { SelfClosingTag } from "../../Tag";

class Image extends SelfClosingTag {
    constructor(props: { src: string, alt?: string, class?: string, id?: string }) {
        super("img", { src: props.src, alt: props.alt, class: props.class, id: props.id })
    }
}

export default Image;