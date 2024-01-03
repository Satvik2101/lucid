
import { UnattributedTag } from "../utils/UnattributedTag";
import { childrenType } from "../utils/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/u
class U extends UnattributedTag {
    constructor(children?: childrenType) {
        super("u", children);
    }
}

export default U;
