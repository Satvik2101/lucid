
import { UnattributedTag } from "../tags/UnattributedTag";
import { childrenType } from "../tags/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/search
class Search extends UnattributedTag {
    constructor(children?: childrenType) {
        super("search", children);
    }
}

export default Search;
    