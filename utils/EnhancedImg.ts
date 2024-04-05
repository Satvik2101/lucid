import Img from "../tags/Img";

class EnhancedImg extends Img {
    constructor(props: { src: string, alt?: string }) {
        super()
        this.src(props.src);
        this.alt(props.alt);
    }
}

export default EnhancedImg;