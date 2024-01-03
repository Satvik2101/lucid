
import { UnattributedTag } from "../tags/UnattributedTag";
import { childrenType } from "../tags/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/h4
class H4 extends UnattributedTag {
    constructor(children?: childrenType) {
        super("h4", children);
    }
}

export default H4;
    