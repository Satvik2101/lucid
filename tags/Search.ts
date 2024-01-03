
import { UnattributedTag } from "../utils/UnattributedTag";
import { childrenType } from "../utils/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/search
class Search extends UnattributedTag {
    constructor(children?: childrenType) {
        super("search", children);
    }
}

export default Search;
