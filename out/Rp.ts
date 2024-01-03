
import { UnattributedTag } from "../tags/UnattributedTag";
import { childrenType } from "../tags/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/rp
class Rp extends UnattributedTag {
    constructor(children?: childrenType) {
        super("rp", children);
    }
}

export default Rp;
    