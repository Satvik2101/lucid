
import { UnattributedTag } from "../tags/UnattributedTag";
import { childrenType } from "../tags/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/section
class Section extends UnattributedTag {
    constructor(children?: childrenType) {
        super("section", children);
    }
}

export default Section;
    