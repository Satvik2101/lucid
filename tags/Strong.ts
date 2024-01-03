
import { UnattributedTag } from "../utils/UnattributedTag";
import { childrenType } from "../utils/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/strong
class Strong extends UnattributedTag {
    constructor(children?: childrenType) {
        super("strong", children);
    }
}

export default Strong;
