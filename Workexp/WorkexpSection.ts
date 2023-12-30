import Div from "../Div";
import Workexp from "../interface/workexp";
import html from "../html";
import { Tag } from "../Tag";
import WorkexpCard from "./WorkexpCard";
import Chooser from "./Chooser";



class WorkexpSection extends Div{
    constructor(workexp: Workexp[]) {
        super({
            divClass: "section", id: "workexp", children: [
                new Div({
                    id: "workexp_section_start", children: [
                        new Tag("h2", { class: "section_title" }, [
                            "Where I've Worked",
                            new Tag("span", { class: "separator_line" },[])
                        ]),
                        "I've been lucky enough to be able to work for some amazing companies and organizations. Here are some of them."
                    ]
                }), //workexp_section_start
                new Div({
                    id: "workexp_cards_container",
                    children: [
                        new Chooser(workexp),
                        ...workexp.map((workexp, idx) => new WorkexpCard(workexp, idx))
                    ]
                }),
        ]});
    }
}

export default WorkexpSection