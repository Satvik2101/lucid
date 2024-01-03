
import { UnattributedTag } from "../utils/UnattributedTag";
import { childrenType } from "../utils/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ruby
class Ruby extends UnattributedTag {
    constructor(children?: childrenType) {
        super("ruby", children);
    }
}

export default Ruby;
