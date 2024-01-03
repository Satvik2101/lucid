
import { UnattributedTag } from "../utils/UnattributedTag";
import { childrenType } from "../utils/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/abbr
class Abbr extends UnattributedTag {
    constructor(children?: childrenType) {
        super("abbr", children);
    }
}

export default Abbr;
