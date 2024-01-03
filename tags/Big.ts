
import { UnattributedTag } from "../utils/UnattributedTag";
import { childrenType } from "../utils/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/big
class Big extends UnattributedTag {
    constructor(children?: childrenType) {
        super("big", children);
    }
}

export default Big;
