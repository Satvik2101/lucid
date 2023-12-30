/// <reference path="C:/Users/Administrator/AppData/Roaming/npm/node_modules/@types/node/fs.d.ts" />


import fs from 'fs';
import WorkexpSection from './Workexp/WorkexpSection';
import Navbar from './global/NavBar';
import ProfileLinks from './Home/ProfileLinks';
import Home from './Home/Home';


//read raw.json
var raw = JSON.parse(fs.readFileSync("./raw.json").toString());

function Play() {
    // var ele = DefaultHeader();

    var ele = new Home();
    fs.writeFileSync("./out.html", ele.toString())
}

Play();

