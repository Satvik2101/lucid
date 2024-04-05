import childrenType from "../childrenType";
import Tag from "./Tag";

//Tags that don't have particular attributes associated with them, other than global attributes
// i.e, their most common use is to be a container for other tags.


// They are most commonly used without any attributes.
class UnattributedTag extends Tag {
    constructor(tagName: string, children: childrenType) {
        super(tagName, children);
    }
}



export default UnattributedTag 