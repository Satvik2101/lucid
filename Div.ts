import { ClassIDTag, childrenType } from "./Tag";

class Div extends ClassIDTag {

    constructor(props: { divClass?: string, id?: string, onclick?: string, style?: string, children?: childrenType }) {
        var attri = {
            onclick: props.onclick,
            style: props.style
        }
        super({ name: "div", children: props.children, class: props.divClass, id: props.id, otherAttributes: attri });

    }
}

export default Div;