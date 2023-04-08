import React, { ReactElement } from "react";
import Style from "@studio/domain/models/style";

export type Styles = { [key: string]: Style };
export type Props = { styles?: Styles; id?: string; label?: string };
export default abstract class Item {
    private static idCounter = 0;

    id: string = `item-${Item.idCounter}`;
    protected type: string = "div";
    label?: string;
    styles: Styles = {};
    children?: any;
    protected componentProps: { [key: string]: any } = {};

    protected constructor(type: string, props: Props) {
        this.styles = props.styles ?? this.styles;
        this.styles = {
            ...this.styles,
            "min-width": {
                value: "10px",
            },
            "min-height": {
                value: "10px",
            },
            // overflow: {
            //     // value: "auto",
            // },
            transition: {
                value: "outline 0.1s ease-in-out",
            },
        };
        this.type = type;
        this.id = props.id ?? this.id;
        this.label = props.label;
        Item.idCounter++;
    }

    // private traverse() {}

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
        const component = React.createElement(
            this.type,
            {
                id: this.id,
                ...this.componentProps,
                onClick: (e) => {
                    e.stopPropagation();
                    onClick(levelsValue);
                },
            },
            ...(Array.isArray(this.children)
                ? this.children?.map((child, i) =>
                      child instanceof Item
                          ? child.generateDocumentComponent(
                                onClick,
                                i,
                                levelsValue
                            )
                          : child
                  )
                : [this.children])
        );
        return component;
    }

    private traverseStyles(item?: Item): { [id: string]: Styles } {
        if (this.children === undefined && item?.children === undefined)
            return {};
        const prevStyles = Array.isArray(item?.children ?? this.children)
            ? (item?.children ?? this.children).reduce(
                  (
                      prev: { [id: string]: { [key: string]: Style } },
                      child: Item | string
                  ) => {
                      console.log(child instanceof Item);
                      if (child instanceof Item) {
                          prev[child.id] = child.styles;
                          prev = { ...prev, ...this.traverseStyles(child) };
                      }
                      return prev;
                  },
                  {
                      [this.id]: this.styles,
                  }
              )
            : {};

        return prevStyles;
    }

    private generateStyles(): string {
        const prevStyles = this.traverseStyles();

        console.log({ prevStyles });
        const stylesString = Object.entries(prevStyles)
            .map(([id, styles]: [string, Styles]) => {
                return `#marketmate-studio #${id} {\n${Object.entries(
                    styles ?? {}
                )
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

    abstract clone(): Item;

    abstract push(item: Item | string): void;
}
