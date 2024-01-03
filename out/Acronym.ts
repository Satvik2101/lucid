
import { UnattributedTag } from "../tags/UnattributedTag";
import { childrenType } from "../tags/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/acronym
class Acronym extends UnattributedTag {
    constructor(children?: childrenType) {
        super("acronym", children);
    }
}

export default Acronym;
    