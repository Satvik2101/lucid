
import { UnattributedTag } from "../tags/UnattributedTag";
import { childrenType } from "../tags/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/big
class Big extends UnattributedTag {
    constructor(children?: childrenType) {
        super("big", children);
    }
}

export default Big;
    