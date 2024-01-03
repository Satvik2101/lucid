
import { UnattributedTag } from "../utils/UnattributedTag";
import { childrenType } from "../utils/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/cite
class Cite extends UnattributedTag {
    constructor(children?: childrenType) {
        super("cite", children);
    }
}

export default Cite;
