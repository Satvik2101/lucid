
import { UnattributedTag } from "../tags/UnattributedTag";
import { childrenType } from "../tags/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/portal
class Portal extends UnattributedTag {
    constructor(children?: childrenType) {
        super("portal", children);
    }
}

export default Portal;
    