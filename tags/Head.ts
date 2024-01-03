
import { UnattributedTag } from "../utils/UnattributedTag";
import { childrenType } from "../utils/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/head
class Head extends UnattributedTag {
    constructor(children?: childrenType) {
        super("head", children);
    }
}

export default Head;
