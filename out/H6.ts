
import { UnattributedTag } from "../tags/UnattributedTag";
import { childrenType } from "../tags/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/h6
class H6 extends UnattributedTag {
    constructor(children?: childrenType) {
        super("h6", children);
    }
}

export default H6;
    