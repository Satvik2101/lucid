import { Tag } from "./Tag";
import { DefaultHeader } from "./header";
import Chooser from "./component/Chooser";

import Div  from "./Div";
import TechStack from "./component/TechStack";
import WorkexpPoints from "./component/WorkExpPoints";
import WorkexpCard from "./component/WorkexpCard";
const fs = require("fs");


//read raw.json
var raw = require("./raw.json");



function Play() {
    // var ele = DefaultHeader();
    
    var ele = new WorkexpCard(raw.workexp[0],0);
    var file = fs.createWriteStream("./out.html");
    file.write(ele.toString());
}

Play();

