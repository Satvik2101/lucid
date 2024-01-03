
import { UnattributedTag } from "../tags/UnattributedTag";
import { childrenType } from "../tags/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/pre
class Pre extends UnattributedTag {
    constructor(children?: childrenType) {
        super("pre", children);
    }
}

export default Pre;
    