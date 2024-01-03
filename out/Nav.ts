
import { UnattributedTag } from "../tags/UnattributedTag";
import { childrenType } from "../tags/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/nav
class Nav extends UnattributedTag {
    constructor(children?: childrenType) {
        super("nav", children);
    }
}

export default Nav;
    