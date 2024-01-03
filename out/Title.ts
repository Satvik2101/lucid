
import { UnattributedTag } from "../tags/UnattributedTag";
import { childrenType } from "../tags/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/title
class Title extends UnattributedTag {
    constructor(children?: childrenType) {
        super("title", children);
    }
}

export default Title;
    