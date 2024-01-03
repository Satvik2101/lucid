import Div from "../Div";
import Image from "../global/Tags/Image";

class ProjectImage extends Div {
    constructor(props: { src: string | undefined, name: string, isEven: Boolean, alt?: string }) {
        if (props.alt === undefined) props.alt = props.name;
        if (props.src == undefined) {
            super({});
            return;
        }
        var style = "";
        var imgStyle = "";
        if (props.isEven) {

            style = "margin-left:0;margin-right:2em;"
            imgStyle = "float:right";
        } else {
            style = "margin-right:0;margin-left:2em;"
            imgStyle = "float:left";

        }

        super({
            divClass: "project_image",
            style: style,
            children: new Image({ src: props.src, alt: props.alt, style: imgStyle })
        });
    }
}

export default ProjectImage;