
import { UnattributedTag } from "../utils/UnattributedTag";
import { childrenType } from "../utils/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/svg
class Svg extends UnattributedTag {
    constructor(children?: childrenType) {
        super("svg", children);
    }
}

export default Svg;
