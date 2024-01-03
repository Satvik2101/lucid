
import { UnattributedTag } from "../tags/UnattributedTag";
import { childrenType } from "../tags/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/noscript
class Noscript extends UnattributedTag {
    constructor(children?: childrenType) {
        super("noscript", children);
    }
}

export default Noscript;
    