
import { UnattributedTag } from "../tags/UnattributedTag";
import { childrenType } from "../tags/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/header
class Header extends UnattributedTag {
    constructor(children?: childrenType) {
        super("header", children);
    }
}

export default Header;
    