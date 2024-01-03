
import { UnattributedTag } from "../tags/UnattributedTag";
import { childrenType } from "../tags/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figcaption
class Figcaption extends UnattributedTag {
    constructor(children?: childrenType) {
        super("figcaption", children);
    }
}

export default Figcaption;
    