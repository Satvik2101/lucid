
import { UnattributedTag } from "../utils/UnattributedTag";
import { childrenType } from "../utils/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/sup
class Sup extends UnattributedTag {
    constructor(children?: childrenType) {
        super("sup", children);
    }
}

export default Sup;
