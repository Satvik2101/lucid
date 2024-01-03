
import { Tag,childrenType } from "../tags/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meter
class Meter extends Tag {
    constructor(children?: childrenType) {
        super("meter", children);
    }
    
    form(value: string) {
        this.setAttr("form", value);
    }

    high(value: string) {
        this.setAttr("high", value);
    }

    low(value: string) {
        this.setAttr("low", value);
    }

    max(value: string) {
        this.setAttr("max", value);
    }

    min(value: string) {
        this.setAttr("min", value);
    }

    optimum(value: string) {
        this.setAttr("optimum", value);
    }

    value(value: string) {
        this.setAttr("value", value);
    }

}

export default Meter;
    