import Item, { Props } from "@studio/domain/models/item";
import { Styles } from "@studio/domain/models/style";

export default class Element extends Item {
    children: string;

    constructor(type: string, props: Props, children: string) {
        super(type, props);
        this.children = children;
    }

    clone(): Element {
        return new Element(
            this.type,
            { id: this.id, styles: this.styles, label: this.label },
            this.children
        );
    }

    push(item: string): void {
        this.children = item;
    }
}
