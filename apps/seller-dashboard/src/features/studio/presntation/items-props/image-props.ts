import CommonPropsBuilder from "@studio/presntation/items-props/common-props";
import Element from "@studio/domain/models/element";

export default class ImagePropsBuilder extends CommonPropsBuilder {
    constructor(element: Element) {
        super(element);
        this.props.general.items.push({
            name: "Value",
            type: "file",
            onChange: (value: string) => {
                this.item.push(value);
                return this.item.clone();
            },
        });
    }
}
