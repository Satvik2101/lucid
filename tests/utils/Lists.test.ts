import Li from "../../tags/Li";
import SimpleOrderedList from "../../utils/SimpleOrderedList";
import SimpleUnorderedList from "../../utils/SimpleUnorderedList";

function testChildren(tag: SimpleOrderedList | SimpleUnorderedList, items: string[]) {
    let listChildren = tag.children;
    expect(listChildren).toBeInstanceOf(Array);
    listChildren = listChildren as any[];

    expect(listChildren.length).toBe(items.length);
    for (let i = 0; i < items.length; i++) {
        let listChild = listChildren[i];
        expect(listChild).toBeInstanceOf(Li);
        listChild = listChild as Li;
        expect(listChild.body()).toBe(items[i]);
    }
}

const items = ["item1", "item2", "item3"];

describe("SimpleOrderedList", () => {

    let tag: SimpleOrderedList;

    beforeEach(() => {
        tag = new SimpleOrderedList(items);
    });


    it("should have the correct tag name", () => {
        expect(tag.tagName).toBe("ol");
    });

    it("should set items correctly", () => {
        testChildren(tag, items);
    });
})

describe("SimpleUnorderedList", () => {

    let tag: SimpleUnorderedList;

    beforeEach(() => {
        tag = new SimpleUnorderedList(items);
    });

    it("should have the correct tag name", () => {
        expect(tag.tagName).toBe("ul");
    });

    it("should set items correctly", () => {
        testChildren(tag, items);
    });
});