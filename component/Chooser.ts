import {Tag} from "../Tag";
import Div from "../Div";
import Workexp from "../interface/workexp";


class ChooserItem extends Div{

    constructor(companyShortName: string, idx: number){
        
        var chooserClass = "workexp_chooser_item";
        if (idx == 0) chooserClass += " workexp_chooser_item_selected";
        super({ divClass: chooserClass, id : `workexp_chooser_item_${idx + 1}`,children: new Tag("button", {}, companyShortName) });
    }
}


class Chooser extends Div{
    constructor(props: Workexp[]) {
        super({ divClass: "workexp_chooser", children: props.map((workexp, idx) => new ChooserItem(workexp.shortName, idx)) });
    }
}

export default Chooser;