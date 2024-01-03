
import { UnattributedTag } from "../tags/UnattributedTag";
import { childrenType } from "../tags/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/strong
class Strong extends UnattributedTag {
    constructor(children?: childrenType) {
        super("strong", children);
    }
}

export default Strong;
    