
import { UnattributedTag } from "../tags/UnattributedTag";
import { childrenType } from "../tags/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/footer
class Footer extends UnattributedTag {
    constructor(children?: childrenType) {
        super("footer", children);
    }
}

export default Footer;
    