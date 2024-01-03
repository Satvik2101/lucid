
import { UnattributedTag } from "../tags/UnattributedTag";
import { childrenType } from "../tags/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/u
class U extends UnattributedTag {
    constructor(children?: childrenType) {
        super("u", children);
    }
}

export default U;
    