
import { UnattributedTag } from "../utils/UnattributedTag";
import { childrenType } from "../utils/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/acronym
class Acronym extends UnattributedTag {
    constructor(children?: childrenType) {
        super("acronym", children);
    }
}

export default Acronym;
