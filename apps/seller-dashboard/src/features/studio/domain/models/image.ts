import Item, { Props } from "@studio/domain/models/item";
import Element from "@studio/domain/models/element";
import React, { ReactElement } from "react";

export default class Image extends Element {
    constructor(props: Props) {
        const styles = {
            ...props.styles,
            display: {
                value: "inline-block",
            },
            "min-width": {
                value: "500px",
            },
            "min-height": {
                value: "100px",
            },
            "max-width": {
                value: "100%",
            },
        };
        super("img", { ...props, styles }, "");
        this.componentProps = {
            src: "https://cdn-icons-png.flaticon.com/512/1160/1160358.png",
            alt: "",
        };
    }

    push(image: string): void {
        this.componentProps.src = image;
    }

    protected generateDocumentComponent(
        onClick: any = () => {},
        index: number = 0,
        levels: number[] = []
    ): ReactElement {
        const levelsValue =
            levels[0] === undefined
                ? [-1]
                : levels[0] === -1
                ? [index]
                : [...levels, index];
        const component = React.createElement(this.type, {
            id: this.id,
            ...this.componentProps,
            onClick: (e) => {
                e.stopPropagation();
                onClick(levelsValue);
            },
        });
        return component;
    }

    clone(): Image {
        return new Image({
            id: this.id,
            styles: this.styles,
            label: this.label,
        });
    }
}
