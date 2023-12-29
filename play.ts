import { Tag } from "./Tag";
import { DefaultHeader } from "./header";
import Chooser from "./component/Chooser";

import Div  from "./Div";
import TechStack from "./component/TechStack";
import WorkexpPoints from "./component/WorkExpPoints";
const fs = require("fs");


//read raw.json
var raw = require("./raw.json");



function Play() {
    var ele = new WorkexpPoints(raw.workexp[0]);
    var file = fs.createWriteStream("./out.html");
    file.write(ele.toString());
}

Play();

