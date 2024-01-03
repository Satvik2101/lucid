import Div from "../Div";

class BorderMask extends Div {
    constructor() {
        super({
            divClass: "border_mask", children: [
                new Div({ id: "mask_top" }),
                new Div({ id: "mask_right" }),
                new Div({ id: "mask_bottom" }),
                new Div({ id: "mask_left" })
            ]
        });
    };
}

export default BorderMask;