
import { UnattributedTag } from "../tags/UnattributedTag";
import { childrenType } from "../tags/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/nobr
class Nobr extends UnattributedTag {
    constructor(children?: childrenType) {
        super("nobr", children);
    }
}

export default Nobr;
    