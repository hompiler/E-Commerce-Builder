import Item, { Props } from "@studio/domain/models/item";
import Container from "@studio/domain/models/container";

export default class LinearContainer extends Container {

    constructor(props: Props, ...children: Array<Item | string>) {
        super("div", props, ...children);
        this.styles = {
            ...this.styles,
            display: {
                value: "flex",
            },
        };
    }

    private _orientation: "horizontal" | "vertical" = "horizontal";
    set orientation(orientation: "horizontal" | "vertical") {
        this._orientation = orientation;
        this.styles = {
            ...this.styles,
            "flex-direction": {
                value: orientation === "horizontal" ? "row" : "column",
            },
        };
    }

    get orientation() {
        return this._orientation;
    }
}
