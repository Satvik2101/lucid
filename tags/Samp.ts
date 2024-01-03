
import { UnattributedTag } from "../utils/UnattributedTag";
import { childrenType } from "../utils/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/samp
class Samp extends UnattributedTag {
    constructor(children?: childrenType) {
        super("samp", children);
    }
}

export default Samp;
