
import { UnattributedTag } from "../tags/UnattributedTag";
import { childrenType } from "../tags/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/rtc
class Rtc extends UnattributedTag {
    constructor(children?: childrenType) {
        super("rtc", children);
    }
}

export default Rtc;
    