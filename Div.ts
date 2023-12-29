import { Tag } from "./Tag";

class Div extends Tag{
    divClass: string | undefined;
    id: string | undefined;
    constructor(props: { divClass?: string, id?: string, body: string }) {
        var attri: { class?: string, id?:string} = {}
        if (props.divClass) attri["class"] = props.divClass;
        if (props.id) attri["id"] = props.id;
        super("div", attri, props.body);
        this.divClass = props.divClass;
        this.id = props.id;
    }
}

export default Div;