
import { UnattributedTag } from "../utils/UnattributedTag";
import { childrenType } from "../utils/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template
class Template extends UnattributedTag {
    constructor(children?: childrenType) {
        super("template", children);
    }
}

export default Template;
