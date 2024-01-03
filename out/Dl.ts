
import { UnattributedTag } from "../tags/UnattributedTag";
import { childrenType } from "../tags/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dl
class Dl extends UnattributedTag {
    constructor(children?: childrenType) {
        super("dl", children);
    }
}

export default Dl;
    