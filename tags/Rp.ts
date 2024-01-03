
import { UnattributedTag } from "../utils/UnattributedTag";
import { childrenType } from "../utils/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/rp
class Rp extends UnattributedTag {
    constructor(children?: childrenType) {
        super("rp", children);
    }
}

export default Rp;
