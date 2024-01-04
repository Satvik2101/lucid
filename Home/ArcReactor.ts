import A from "../tags/A";
import Div from "../tags/Div";
import EnhancedImg from "../utils/EnhancedImg";

class ArcReactor extends Div {
    constructor() {
        var children = [
            new A([
                new EnhancedImg({
                    src: "./images/arcblue.png",
                    alt: "nav_bar_logo",
                })
            ]).href("#home").target("_self")
        ]
        super(children);
        super.id("arc_reactor");
    }
}

export default ArcReactor;