
import { UnattributedTag } from "../tags/UnattributedTag";
import { childrenType } from "../tags/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/hgroup
class Hgroup extends UnattributedTag {
    constructor(children?: childrenType) {
        super("hgroup", children);
    }
}

export default Hgroup;
    