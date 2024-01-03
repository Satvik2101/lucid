
import { UnattributedTag } from "../utils/UnattributedTag";
import { childrenType } from "../utils/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/b
class B extends UnattributedTag {
    constructor(children?: childrenType) {
        super("b", children);
    }
}

export default B;
