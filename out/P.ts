
import { UnattributedTag } from "../tags/UnattributedTag";
import { childrenType } from "../tags/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/p
class P extends UnattributedTag {
    constructor(children?: childrenType) {
        super("p", children);
    }
}

export default P;
    