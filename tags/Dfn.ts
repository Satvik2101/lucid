
import { UnattributedTag } from "../utils/UnattributedTag";
import { childrenType } from "../utils/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dfn
class Dfn extends UnattributedTag {
    constructor(children?: childrenType) {
        super("dfn", children);
    }
}

export default Dfn;
