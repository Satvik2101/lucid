import { Tag, childrenType } from "./Tag";

class Div extends Tag {

    constructor(props: { class?: string, id?: string, children?: childrenType }) {

        super("div", props.children, { class: props.class, id: props.id });
    }
}

export default Div;