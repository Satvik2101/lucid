
import { UnattributedTag } from "../utils/UnattributedTag";
import { childrenType } from "../utils/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/hgroup
class Hgroup extends UnattributedTag {
    constructor(children?: childrenType) {
        super("hgroup", children);
    }
}

export default Hgroup;
