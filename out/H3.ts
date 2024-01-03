
import { UnattributedTag } from "../tags/UnattributedTag";
import { childrenType } from "../tags/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/h3
class H3 extends UnattributedTag {
    constructor(children?: childrenType) {
        super("h3", children);
    }
}

export default H3;
    