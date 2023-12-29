import Div from "../Div";
import html from "../html";
import TechStack from "./TechStack";
import UnorderedList from "./UnorderedList";


class WorkexpPoints extends Div{
    constructor(props: { points: string[],techstack: string[] }) {
        
        super({
            divClass: "workexp_points", children: [
                new UnorderedList(props.points),
                new TechStack(props.techstack)
        ] });
    }
}

export default WorkexpPoints;