
import { UnattributedTag } from "../utils/UnattributedTag";
import { childrenType } from "../utils/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/header
class Header extends UnattributedTag {
    constructor(children?: childrenType) {
        super("header", children);
    }
}

export default Header;
