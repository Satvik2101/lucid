import BackgroundImageSection from "./Home/BackgroundImageSection";
import { Tag } from "./Tag";
import WorkexpSection from "./Workexp/WorkexpSection";
import Script from "./global/Tags/Script";
import { DefaultHeader } from "./global/header";

class Index extends Tag {
    constructor(rawData: { [key: string]: any }) {
        super("html", { lang: "en", ontouchmove: "" }, [
            new DefaultHeader(),
            new Tag("body", {}, [
                new BackgroundImageSection(),
                new WorkexpSection(rawData.workexp),
            ]),
            new Script("./scripts/typewriter.js"),
            new Script("./scripts/workexp_chooser.js"),
        ])
    }

    start(): string {
        return `<!DOCTYPE html>` + "\n" + super.start();
    }
}

export default Index;