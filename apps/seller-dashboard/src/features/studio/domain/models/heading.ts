import Element from "@studio/domain/models/element";
import { Props } from "@studio/domain/models/item";

export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;
export default class Heading extends Element {
    constructor(level: HeadingLevel, props: Props, children: string) {
        const value = 12 / level;
        const newStyles = {
            ...(props.styles ?? {}),
            "font-size": {
                value: `${14 + value}px`,
            },
            display: {
                value: "block",
            },
            "font-weight": {
                value: "500",
            }
        };
        super(`h${level}`, { ...props, styles: newStyles }, children);
        this.children = children;
    }
}
