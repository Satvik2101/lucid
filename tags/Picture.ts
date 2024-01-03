
import { UnattributedTag } from "../utils/UnattributedTag";
import { childrenType } from "../utils/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture
class Picture extends UnattributedTag {
    constructor(children?: childrenType) {
        super("picture", children);
    }
}

export default Picture;
