
import { UnattributedTag } from "../utils/UnattributedTag";
import { childrenType } from "../utils/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/portal
class Portal extends UnattributedTag {
    constructor(children?: childrenType) {
        super("portal", children);
    }
}

export default Portal;
