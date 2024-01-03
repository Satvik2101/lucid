
import { UnattributedTag } from "../utils/UnattributedTag";
import { childrenType } from "../utils/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/aside
class Aside extends UnattributedTag {
    constructor(children?: childrenType) {
        super("aside", children);
    }
}

export default Aside;
