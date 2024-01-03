
import { UnattributedTag } from "../utils/UnattributedTag";
import { childrenType } from "../utils/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/nobr
class Nobr extends UnattributedTag {
    constructor(children?: childrenType) {
        super("nobr", children);
    }
}

export default Nobr;
