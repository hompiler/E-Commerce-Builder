import CommonPropsBuilder from "@studio/presntation/items-props/common-props";
import Element from "@studio/domain/models/element";

export default class ElementPropsBuilder extends CommonPropsBuilder {
    constructor(element: Element) {
        super(element);
        this.props.general.items.push({
            name: "Value",
            type: "text",
            value: this.item.children,
            onChange: (value: string) => {
                this.item.children = value;
                return this.item.clone();
            },
        });
    }
}
