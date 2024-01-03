
import { UnattributedTag } from "../tags/UnattributedTag";
import { childrenType } from "../tags/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/content
class Content extends UnattributedTag {
    constructor(children?: childrenType) {
        super("content", children);
    }
}

export default Content;
    