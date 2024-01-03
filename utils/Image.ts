import { VoidTag } from "./Tag";

class Image extends VoidTag {
    constructor(props: { src: string, alt?: string }) {
        super("img", { src: props.src, alt: props.alt })
    }
}

export default Image;