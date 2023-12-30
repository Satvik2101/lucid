import { Tag, childrenType } from "./Tag";

class Div extends Tag {
    divClass: string | undefined;
    id: string | undefined;
    constructor(props: { divClass?: string, id?: string, onclick?: string, children: childrenType }) {
        var attri: { class?: string, id?: string, onclick?: string } = {}
        if (props.divClass) attri["class"] = props.divClass;
        if (props.id) attri["id"] = props.id;
        if (props.onclick) attri["onclick"] = props.onclick;
        super("div", attri, props.children);
        this.divClass = props.divClass;
        this.id = props.id;
    }
}

export default Div;