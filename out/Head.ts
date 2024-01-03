
import { UnattributedTag } from "../tags/UnattributedTag";
import { childrenType } from "../tags/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/head
class Head extends UnattributedTag {
    constructor(children?: childrenType) {
        super("head", children);
    }
}

export default Head;
    