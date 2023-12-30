import Div from "../Div";
import { ClassIDTag, Tag } from "../Tag";

class NameAndDesignation extends Div {
    constructor() {
        super({
            id: "name_and_desig",
            divClass: "padded_centered",
            children: [
                new ClassIDTag("h1", "> Hi. I'm Satvik Gupta.", undefined, "name_heading"),
                new ClassIDTag("p", "Software Developer", undefined, "designation")

            ]
        });
    }
}

export default NameAndDesignation;