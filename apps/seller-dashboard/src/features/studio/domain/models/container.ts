import Item, { Props } from "@studio/domain/models/item";
import { Styles } from "@studio/domain/models/style";
import Element from "@studio/domain/models/element";

export default class Container extends Item {
    children: Array<Item | string>;

    constructor(type: string, props: Props, ...children: Array<Item | string>) {
        super(type, props);
        this.children = children;
    }

    clone(): Container {
        return new Container(
            this.type,
            { id: this.id, styles: this.styles, label: this.label },
            ...this.children
        );
    }

    push(item: Item | string): void {
        this.children.push(item);
    }
}
