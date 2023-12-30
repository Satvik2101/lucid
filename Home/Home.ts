import Div from "../Div";
import Bio from "./Bio";
import NameAndDesignation from "./NameAndDesignation";
import ProfileLinks from "./ProfileLinks";

class Home extends Div {
    constructor() {
        super({
            id: "home",
            children: [
                new Div({
                    id: "home_section",
                    children: [
                        new NameAndDesignation(),
                        new Bio(),
                        new ProfileLinks(),
                    ]
                })
            ]
        })
    }
}

export default Home;