
import { UnattributedTag } from "../tags/UnattributedTag";
import { childrenType } from "../tags/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/h1
class H1 extends UnattributedTag {
    constructor(children?: childrenType) {
        super("h1", children);
    }
}

export default H1;
    