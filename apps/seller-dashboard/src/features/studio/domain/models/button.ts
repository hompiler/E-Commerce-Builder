import Element from "@studio/domain/models/element";
import { Props } from "@studio/domain/models/item";

export default class Button extends Element {
    constructor(props: Props, children: string) {
        const newStyles = {
            ...(props.styles ?? {}),
            "background-color": {
                value: "#ff7a59",
            },
            "border-radius": {
                value: "4px",
            },
            color: {
                value: "#ffffff",
            },
            "font-size": {
                value: "16px",
            },
            padding: {
                value: "6px 24px",
            },
            display: {
                value: "inline-block",
            },
        };
        super("div", { ...props, styles: newStyles }, children);
        this.children = children;
    }
}
