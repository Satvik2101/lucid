import Div from "../Div";
import { ClassIDTag, Tag } from "../Tag";

class NameAndDesignation extends Div {
    constructor() {
        super({
            id: "name_and_desig",
            divClass: "padded_centered",
            children: [
                new ClassIDTag({ name: "h1", children: "> Hi. I'm Satvik Gupta.", id: "name_heading" }),
                new ClassIDTag({ name: "p", children: "Software Developer", id: "designation" })

            ]
        });
    }
}

export default NameAndDesignation;