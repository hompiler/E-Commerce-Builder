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

    private generateDocumentComponent(): ReactElement {
        const component = React.createElement(
            this.type,
            {
                id: this.id,
            },
            ...this.children.map((child) =>
                child instanceof Item
                    ? child.generateDocumentComponent()
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
            {}
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

    public getUIComponent(): { component: ReactElement; styles: string } {
        const component = this.generateDocumentComponent();
        const styles = this.generateStyles();

        return { component, styles };
    }
}
