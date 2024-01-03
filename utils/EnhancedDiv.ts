import Div from "../tags/Div";
import { Tag, childrenType } from "./Tag";

class EnhancedDiv extends Div {

    constructor(props: { class?: string, id?: string, children?: childrenType }) {

        super(props.children);
        this.class(props.class);
        this.id(props.id);
    }
}

export default EnhancedDiv;