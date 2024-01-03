
import { UnattributedTag } from "../tags/UnattributedTag";
import { childrenType } from "../tags/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/aside
class Aside extends UnattributedTag {
    constructor(children?: childrenType) {
        super("aside", children);
    }
}

export default Aside;
    