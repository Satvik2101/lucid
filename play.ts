/// <reference path="C:/Users/Administrator/AppData/Roaming/npm/node_modules/@types/node/fs.d.ts" />


import fs from 'fs';


//read raw.json
var raw = JSON.parse(fs.readFileSync("./raw.json").toString());


class A {

    x?: string;
    y?: string;
    constructor();
    constructor(x: string | undefined, y: string | undefined);
    constructor(x?: string, y?: string) {
        this.x = x;
        this.y = y;
    }
}


export const a = (x?: string, y?: string): A => new A(x, y);

function Play() {
    // var ele = DefaultHeader();
    // var ele = new Div({ divClass: "section", children: [new DefaultHeader()], style: "background-color:#000000;" })
    // var ele = new Index(raw);
    // fs.writeFileSync("./out.html", ele.toString())
}

Play();

