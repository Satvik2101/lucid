import Div from "../Div";
import { Anchor } from "../global/Tags/Anchor";
import Image from "../global/Tags/Image";

class ArcReactor extends Div {
    constructor() {
        super({
            id: "arc_reactor", children: [
                new Anchor({
                    href: "#home",
                    target: "_self",
                    children: [
                        new Image({
                            src: "./images/arcblue.png",
                            alt: "nav_bar_logo",
                        })
                    ]
                })
            ]
        });
    }
}

export default ArcReactor;