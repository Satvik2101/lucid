import Div from "../Div";
import html from "../html";
import TechStack from "./TechStack";
import UnorderedList from "./UnorderedList";


class WorkexpPoints extends Div{
    constructor(props: { points: string[],techstack: string[] }) {
        var workexpPointsClass = "workexp_points";
        var workexpPointsBody = new UnorderedList({ items: props.points }).toString();
        workexpPointsBody += new TechStack(props.techstack).toString();
        
        super({ divClass: workexpPointsClass, body: workexpPointsBody });
    }
}

export default WorkexpPoints;