
import { UnattributedTag } from "../tags/UnattributedTag";
import { childrenType } from "../tags/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/em
class Em extends UnattributedTag {
    constructor(children?: childrenType) {
        super("em", children);
    }
}

export default Em;
    