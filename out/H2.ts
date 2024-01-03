
import { UnattributedTag } from "../tags/UnattributedTag";
import { childrenType } from "../tags/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/h2
class H2 extends UnattributedTag {
    constructor(children?: childrenType) {
        super("h2", children);
    }
}

export default H2;
    