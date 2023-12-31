import { ClassIDTag, Tag } from "../Tag";

class Footer extends Tag {
    constructor() {
        super("footer", {}, [
            "Built",
            new ClassIDTag({ name: "i", class: "fa-solid fa-code" }),
            "by Satvik Gupta"
        ])
    }

}

export default Footer;