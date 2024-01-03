import Img from "../tags/Img";
import { VoidTag } from "./Tag";

class Image extends Img {
    constructor(props: { src: string, alt?: string }) {
        super()
        this.src(props.src);
        this.alt(props.alt);
    }
}

export default Image;