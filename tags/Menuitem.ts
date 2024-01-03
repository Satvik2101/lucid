
import { UnattributedTag } from "../utils/UnattributedTag";
import { childrenType } from "../utils/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/menuitem
class Menuitem extends UnattributedTag {
    constructor(children?: childrenType) {
        super("menuitem", children);
    }
}

export default Menuitem;
