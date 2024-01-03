
import { UnattributedTag } from "../utils/UnattributedTag";
import { childrenType } from "../utils/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/rtc
class Rtc extends UnattributedTag {
    constructor(children?: childrenType) {
        super("rtc", children);
    }
}

export default Rtc;
