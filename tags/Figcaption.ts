
import { UnattributedTag } from "../utils/UnattributedTag";
import { childrenType } from "../utils/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figcaption
class Figcaption extends UnattributedTag {
    constructor(children?: childrenType) {
        super("figcaption", children);
    }
}

export default Figcaption;
