
import { UnattributedTag } from "../tags/UnattributedTag";
import { childrenType } from "../tags/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/bdo
class Bdo extends UnattributedTag {
    constructor(children?: childrenType) {
        super("bdo", children);
    }
}

export default Bdo;
    