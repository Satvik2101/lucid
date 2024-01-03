
import { UnattributedTag } from "../utils/UnattributedTag";
import { childrenType } from "../utils/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/nav
class Nav extends UnattributedTag {
    constructor(children?: childrenType) {
        super("nav", children);
    }
}

export default Nav;
