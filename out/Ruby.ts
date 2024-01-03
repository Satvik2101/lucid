
import { UnattributedTag } from "../tags/UnattributedTag";
import { childrenType } from "../tags/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ruby
class Ruby extends UnattributedTag {
    constructor(children?: childrenType) {
        super("ruby", children);
    }
}

export default Ruby;
    