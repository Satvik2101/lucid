
import { UnattributedTag } from "../tags/UnattributedTag";
import { childrenType } from "../tags/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/svg
class Svg extends UnattributedTag {
    constructor(children?: childrenType) {
        super("svg", children);
    }
}

export default Svg;
    