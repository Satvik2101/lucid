import { ClassIDTag } from "../Tag";
import { SimpleAnchorTag } from "../global/Tags/Anchor";
import HorizontalBreak from "../global/Tags/HorizontalBreak";

class Bio extends ClassIDTag {
    constructor() {
        super("p", [
            "Computer Engineering senior at Delhi Technological University.",
            new HorizontalBreak(),
            "Technology,coding, and programming have been my passions since I wrote my",
            new SimpleAnchorTag({ href: "https://github.com/Satvik2101/Clean-Folder", linkText: "first Python Script" }),
            "at the age of 15. Building stuff, solving problems, automating tasks, and above all - learning new things - are what I love to do.",


        ], "padded_centered", "bio");
    }
}

export default Bio;