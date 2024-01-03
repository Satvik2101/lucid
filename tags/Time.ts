
import { Tag, childrenType } from "../utils/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/time
class Time extends Tag {
    constructor(children?: childrenType) {
        super("time", children);
    }

    datetime(value: string) {
        this.setAttr("datetime", value);
    }

}

export default Time;
