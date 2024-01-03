
import { UnattributedTag } from "../tags/UnattributedTag";
import { childrenType } from "../tags/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/sup
class Sup extends UnattributedTag {
    constructor(children?: childrenType) {
        super("sup", children);
    }
}

export default Sup;
    