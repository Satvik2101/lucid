
import { UnattributedTag } from "../tags/UnattributedTag";
import { childrenType } from "../tags/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/b
class B extends UnattributedTag {
    constructor(children?: childrenType) {
        super("b", children);
    }
}

export default B;
    