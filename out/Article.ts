
import { UnattributedTag } from "../tags/UnattributedTag";
import { childrenType } from "../tags/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/article
class Article extends UnattributedTag {
    constructor(children?: childrenType) {
        super("article", children);
    }
}

export default Article;
    