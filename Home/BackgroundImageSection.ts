import Div from "../Div";
import Navbar from "../global/NavBar";
import ArcReactor from "./ArcReactor";
import BorderMask from "./BorderMask";
import Home from "./Home";

class BackgroundImageSection extends Div {
    constructor() {
        super({
            id: "bg_image",
            children: [
                new ArcReactor(),
                new Navbar(),
                new BorderMask(),
                new Home(),
            ]

        });
    }
}

export default BackgroundImageSection;