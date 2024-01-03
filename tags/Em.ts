
import { UnattributedTag } from "../utils/UnattributedTag";
import { childrenType } from "../utils/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/em
class Em extends UnattributedTag {
    constructor(children?: childrenType) {
        super("em", children);
    }
}

export default Em;
