import Div from "../Div";

class TechStackItem extends Div{
    constructor(techStackName: string){
        var techStackClass = "tech_stack_item";
        super({ divClass: techStackClass, body: techStackName })
    }
}

class TechStack extends Div{
    constructor(props: string[]) {
        var techStackClass = "tech_stack";
        var techStackBody = "";
        for (var i = 0; i < props.length; i++) {
            techStackBody += (new TechStackItem(props[i])).toString();
        }
        super({ divClass: techStackClass, body: techStackBody });
    }
}

export default TechStack;