import Footer from "../tags/Footer";
import I from "../tags/I";

class PortfolioFooter extends Footer {
    constructor() {
        super([
            "Built",
            new I().class("fa-solid fa-code"),
            "by Satvik Gupta"
        ])
    }

}

export default PortfolioFooter;