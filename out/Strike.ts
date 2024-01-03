
import { UnattributedTag } from "../tags/UnattributedTag";
import { childrenType } from "../tags/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/strike
class Strike extends UnattributedTag {
    constructor(children?: childrenType) {
        super("strike", children);
    }
}

export default Strike;
    