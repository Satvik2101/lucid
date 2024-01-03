
import { UnattributedTag } from "../utils/UnattributedTag";
import { childrenType } from "../utils/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/article
class Article extends UnattributedTag {
    constructor(children?: childrenType) {
        super("article", children);
    }
}

export default Article;
