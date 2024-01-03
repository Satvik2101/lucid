
import { UnattributedTag } from "../utils/UnattributedTag";
import { childrenType } from "../utils/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/title
class Title extends UnattributedTag {
    constructor(children?: childrenType) {
        super("title", children);
    }
}

export default Title;
