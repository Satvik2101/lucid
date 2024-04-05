import childrenType from "../childrenType";
import Div from "../tags/Div";

class EnhancedDiv extends Div {

    constructor(props: { class?: string, id?: string, children?: childrenType }) {

        super(props.children);
        this.class(props.class);
        this.id(props.id);
    }
}

export default EnhancedDiv;