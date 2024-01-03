
import { UnattributedTag } from "../tags/UnattributedTag";
import { childrenType } from "../tags/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dfn
class Dfn extends UnattributedTag {
    constructor(children?: childrenType) {
        super("dfn", children);
    }
}

export default Dfn;
    