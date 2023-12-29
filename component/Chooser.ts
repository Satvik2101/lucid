import {Tag} from "../Tag";
import Div from "../Div";
import Workexp from "../interface/workexp";


class ChooserItem extends Div{

    constructor(companyShortName: string, idx: number){
        
        var chooserClass = "workexp_chooser_item";
        if (idx == 0) chooserClass += " workexp_chooser_item_selected";
        var chooserBody = (new Tag("button", {}, companyShortName)).toString();
        super({ divClass: chooserClass, id : `workexp_chooser_item_${idx + 1}`,body: chooserBody })
    }
}


class Chooser extends Div{
    constructor(props: Workexp[]) {
        var chooserClass = "workexp_chooser";
        var chooserBody = "";
        for (var i = 0; i < props.length; i++) {
            chooserBody += (new ChooserItem(props[i].shortName, i)).toString();
        }
        super({ divClass: chooserClass, body: chooserBody });
    }
}

export default Chooser;