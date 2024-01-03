import Div from "../Div";

class TechStackItem extends Div{
    constructor(techStackName: string){
        var techStackClass = "tech_stack_item";
        super({ divClass: techStackClass, children: techStackName })
    }
}

class TechStack extends Div{
    constructor(props: string[]) {
        
        super({ divClass: "tech_stack", children: props.map((techStackName) => new TechStackItem(techStackName)) });
    }
}

export default TechStack;