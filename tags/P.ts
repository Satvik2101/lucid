
import { UnattributedTag } from "../utils/UnattributedTag";
import { childrenType } from "../utils/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/p
class P extends UnattributedTag {
    constructor(children?: childrenType) {
        super("p", children);
    }
}

export default P;
