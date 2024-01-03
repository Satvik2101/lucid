
import { UnattributedTag } from "../utils/UnattributedTag";
import { childrenType } from "../utils/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/kbd
class Kbd extends UnattributedTag {
    constructor(children?: childrenType) {
        super("kbd", children);
    }
}

export default Kbd;
