
import { Tag, childrenType } from "../utils/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/marquee
class Marquee extends Tag {
    constructor(children?: childrenType) {
        super("marquee", children);
    }

    bgcolor(value: string) {
        this.setAttr("bgcolor", value);
    }

    loop(value: string) {
        this.setAttr("loop", value);
    }

}

export default Marquee;
