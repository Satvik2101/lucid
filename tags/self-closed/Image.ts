import { SelfClosingTag } from "../Tag";

class Image extends SelfClosingTag {
    constructor(props: { src: string, alt?: string }) {
        super("img", { src: props.src, alt: props.alt })
    }
}

export default Image;