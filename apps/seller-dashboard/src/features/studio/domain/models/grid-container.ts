import Item, { Props } from "@studio/domain/models/item";
import Container from "@studio/domain/models/container";

export default class GridContainer extends Container {
    private _columns: string[] = ["1fr", "1fr"];

    constructor(props: Props, ...children: Item[]) {
        super("div", props, ...children);
        this.styles = {
            ...this.styles,
            display: {
                value: "grid",
            },
            "grid-template-columns": {
                value: this._columns.join(" "),
            },
        };
    }

    set columns(columns: string[]) {
        this._columns = columns;
        this.styles = {
            ...this.styles,
            "grid-template-columns": {
                value: columns.join(" "),
            },
        };
    }

    get columns() {
        return this._columns;
    }
}
