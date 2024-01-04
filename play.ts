/// <reference path="C:/Users/Administrator/AppData/Roaming/npm/node_modules/@types/node/fs.d.ts" />

import { VoidTag } from "./utils/Tag";
import Index from "./Index";

import fs from "fs";


//read raw.json
var raw = JSON.parse(fs.readFileSync("./raw.json").toString());

function Play() {
    // var ele = DefaultHeader();
    // var ele = new Div({ divClass: "section", children: [new DefaultHeader()], style: "background-color:#000000;" })
    var ele = new Index(raw);
    fs.writeFileSync("./out.html", ele.toString())
}

Play();

