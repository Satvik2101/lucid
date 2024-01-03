
import { UnattributedTag } from "../utils/UnattributedTag";
import { childrenType } from "../utils/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/section
class Section extends UnattributedTag {
    constructor(children?: childrenType) {
        super("section", children);
    }
}

export default Section;
