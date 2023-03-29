import React, { ReactElement } from "react";
import Style from "@studio/domain/models/style";

type Styles = { [key: string]: Style };
export default class Item {
    id: string;

    type: string;
    label?: string;
    styles: Styles = {};

    children: Array<Item | string> = [];

    constructor(
        id: string,
        type: string,
        styles: Styles,
        ...children: Array<Item | string>
    ) {
        this.id = id;
        this.type = type;
        this.styles = styles;
        this.children = children;
    }

    // private traverse() {}

    private generateDocumentComponent(
        onClick: any,
        index: number = 0,
        levels: number[] = []
    ): ReactElement {
        const levelsValue =
            levels[0] === undefined
                ? [-1]
                : levels[0] === -1
                ? [index]
                : [...levels, index];
        const component = React.createElement(
            this.type,
            {
                id: this.id,
                onClick: (e) => {
                    onClick(levelsValue);
                },
            },
            ...this.children.map((child, i) =>
                child instanceof Item
                    ? child.generateDocumentComponent(onClick, i, levelsValue)
                    : child
            )
        );
        return component;
    }

    private generateStyles(): string {
        const prevStyles = this.children.reduce(
            (prev: { [id: string]: { [key: string]: Style } }, child) => {
                if (child instanceof Item) {
                    prev[child.id] = child.styles;
                }
                return prev;
            },
            {
                [this.id]: this.styles,
            }
        );

        const stylesString = Object.entries(prevStyles)
            .map(([id, styles]: [string, Styles]) => {
                return `#marketmate-studio #${id} {\n${Object.entries(styles)
                    .map(([styleName, style]: [string, Style]) => {
                        return `${styleName}: ${style.value};`;
                    })
                    .join("\n")}\n}`;
            })
            .join("\n");
        console.log({ stylesString });
        return stylesString;
    }

    public getUIComponent(onClick: any): {
        component: ReactElement;
        styles: string;
    } {
        const component = this.generateDocumentComponent(onClick);
        const styles = this.generateStyles();

        return { component, styles };
    }
}
