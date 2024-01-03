
import { UnattributedTag } from "../utils/UnattributedTag";
import { childrenType } from "../utils/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul
class Ul extends UnattributedTag {
    constructor(children?: childrenType) {
        super("ul", children);
    }
}

export default Ul;
