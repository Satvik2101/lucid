
import { UnattributedTag } from "../tags/UnattributedTag";
import { childrenType } from "../tags/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/cite
class Cite extends UnattributedTag {
    constructor(children?: childrenType) {
        super("cite", children);
    }
}

export default Cite;
    