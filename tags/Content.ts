
import { UnattributedTag } from "../utils/UnattributedTag";
import { childrenType } from "../utils/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/content
class Content extends UnattributedTag {
    constructor(children?: childrenType) {
        super("content", children);
    }
}

export default Content;
