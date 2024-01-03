
import { UnattributedTag } from "../tags/UnattributedTag";
import { childrenType } from "../tags/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/abbr
class Abbr extends UnattributedTag {
    constructor(children?: childrenType) {
        super("abbr", children);
    }
}

export default Abbr;
    