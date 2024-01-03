
import { UnattributedTag } from "../utils/UnattributedTag";
import { childrenType } from "../utils/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/shadow
class Shadow extends UnattributedTag {
    constructor(children?: childrenType) {
        super("shadow", children);
    }
}

export default Shadow;
