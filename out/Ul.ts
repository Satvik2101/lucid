
import { UnattributedTag } from "../tags/UnattributedTag";
import { childrenType } from "../tags/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul
class Ul extends UnattributedTag {
    constructor(children?: childrenType) {
        super("ul", children);
    }
}

export default Ul;
    