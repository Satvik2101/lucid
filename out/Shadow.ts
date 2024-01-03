
import { UnattributedTag } from "../tags/UnattributedTag";
import { childrenType } from "../tags/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/shadow
class Shadow extends UnattributedTag {
    constructor(children?: childrenType) {
        super("shadow", children);
    }
}

export default Shadow;
    