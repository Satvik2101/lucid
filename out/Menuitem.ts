
import { UnattributedTag } from "../tags/UnattributedTag";
import { childrenType } from "../tags/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/menuitem
class Menuitem extends UnattributedTag {
    constructor(children?: childrenType) {
        super("menuitem", children);
    }
}

export default Menuitem;
    