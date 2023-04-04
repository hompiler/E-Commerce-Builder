import CommonProps from "@studio/presntation/items-props/common-props";
import CommonPropsBuilder from "@studio/presntation/items-props/common-props";
import LinearContainer from "@studio/domain/models/linear-container";

export default class LinearContainerPropsBuilder extends CommonPropsBuilder {
    constructor(container: LinearContainer) {
        super(container);
        this.props.layout.items.push(
            {
                name: "Gap",
                type: "number",
                value: this.getStylesValue("gap"),
                onChange: (value) =>
                    this.onStyleChange("gap", value + "px", value),
            },
            {
                name: "Direction",
                type: "select",
                options: [
                    {
                        name: "Horizontal",
                        value: "horizontal",
                    },
                    {
                        name: "Vertical",
                        value: "vertical",
                    },
                ],
                value: this.getStylesValue("direction"),
                onChange: (value) =>
                    this.onStyleChange(
                        "flex-direction",
                        value === "horizontal" ? "row" : "column",
                        value
                    ),
            }
        );
    }
}
