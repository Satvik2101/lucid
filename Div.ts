import { ClassIDTag, Tag, childrenType } from "./Tag";

class Div extends ClassIDTag {

    constructor(props: { divClass?: string, id?: string, onclick?: string, children: childrenType }) {
        var attri = {
            onclick: props.onclick,
        }
        super("div", props.children, props.divClass, props.id, attri);

    }
}

export default Div;