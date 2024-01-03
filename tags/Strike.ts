
import { UnattributedTag } from "../utils/UnattributedTag";
import { childrenType } from "../utils/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/strike
class Strike extends UnattributedTag {
    constructor(children?: childrenType) {
        super("strike", children);
    }
}

export default Strike;
