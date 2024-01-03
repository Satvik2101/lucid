
import { UnattributedTag } from "../utils/UnattributedTag";
import { childrenType } from "../utils/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/image
class Image extends UnattributedTag {
    constructor(children?: childrenType) {
        super("image", children);
    }
}

export default Image;
