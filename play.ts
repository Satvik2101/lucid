/// <reference path="C:/Users/Administrator/AppData/Roaming/npm/node_modules/@types/node/fs.d.ts" />


import fs from 'fs';
import WorkexpSection from './Workexp/WorkexpSection';


//read raw.json
var raw = JSON.parse(fs.readFileSync("./raw.json").toString());

function Play() {
    // var ele = DefaultHeader();
    
    var ele = new WorkexpSection(raw.workexp);
    fs.writeFileSync("./out.html",ele.toString())
}

Play();

