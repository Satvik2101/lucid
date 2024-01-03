
import { UnattributedTag } from "../tags/UnattributedTag";
import { childrenType } from "../tags/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture
class Picture extends UnattributedTag {
    constructor(children?: childrenType) {
        super("picture", children);
    }
}

export default Picture;
    