
import { UnattributedTag } from "../tags/UnattributedTag";
import { childrenType } from "../tags/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/image
class Image extends UnattributedTag {
    constructor(children?: childrenType) {
        super("image", children);
    }
}

export default Image;
    