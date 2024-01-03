import { Tag, childrenType } from "./Tag";


//Tags that don't have standard attributes associated with them.
// i.e, their most common use is to be a container for other tags.
// They are most commonly used without any attributes.
class UnattributedTag extends Tag {
    constructor(tagName: string, children: childrenType) {
        super(tagName, children);
    }
}



export { UnattributedTag }