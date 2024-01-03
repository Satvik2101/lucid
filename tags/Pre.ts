
import { UnattributedTag } from "../utils/UnattributedTag";
import { childrenType } from "../utils/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/pre
class Pre extends UnattributedTag {
    constructor(children?: childrenType) {
        super("pre", children);
    }
}

export default Pre;
