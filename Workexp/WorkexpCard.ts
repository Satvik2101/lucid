import Div from "../Div";
import { Tag } from "../Tag";
import Workexp from "../interface/workexp";
import TechStack from "../global/TechStack";
import UnorderedList from "../global/UnorderedList";


class WorkexpPoints extends Div{
    constructor(props: { points: string[],techstack: string[] }) {
        
        super({
            divClass: "workexp_points", children: [
                new UnorderedList(props.points),
                new TechStack(props.techstack)
        ] });
    }
}

class WorkexpCard extends Div{
    constructor(props: Workexp,idx: number) {
        var workexpCardClass = "workexp_card";
        if (idx == 0) workexpCardClass += " workexp_card_selected";

        super({ divClass: workexpCardClass, children:[
            new Tag("h3", { class: "workexp_title" }, props.company),
            new Tag("h4", { class: "workexp_subtitle" }, props.role),
            new Tag("h4", { class: "workexp_timespan" }, props.start + " - " + props.end),
            new WorkexpPoints({ points: props.points, techstack: props.techstack })
        ] });
    }
}

export default WorkexpCard;