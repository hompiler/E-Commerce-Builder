import Item from "@studio/domain/models/item";

export default function getSelectedItems(root: Item, levels: number[]) {
    if (levels[0] === -1) {
        return root;
    } else {
        const element = levels.reduce((prev: any, level) => {
            if (typeof prev === "undefined") return root.children[level];
            else return prev.children[level];
        }, undefined);

        return element;
    }
}