
import { UnattributedTag } from "../tags/UnattributedTag";
import { childrenType } from "../tags/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/samp
class Samp extends UnattributedTag {
    constructor(children?: childrenType) {
        super("samp", children);
    }
}

export default Samp;
    