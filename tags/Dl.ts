
import { UnattributedTag } from "../utils/UnattributedTag";
import { childrenType } from "../utils/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dl
class Dl extends UnattributedTag {
    constructor(children?: childrenType) {
        super("dl", children);
    }
}

export default Dl;
