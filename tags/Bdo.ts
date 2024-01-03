
import { UnattributedTag } from "../utils/UnattributedTag";
import { childrenType } from "../utils/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/bdo
class Bdo extends UnattributedTag {
    constructor(children?: childrenType) {
        super("bdo", children);
    }
}

export default Bdo;
