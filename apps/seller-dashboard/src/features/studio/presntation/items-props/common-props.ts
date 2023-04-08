import Item from "@studio/domain/models/item";

interface BuilderProps {
    [key: string]: {
        title: string;
        items: Array<{
            name: string;
            type: string;
            value?: string;
            onChange?: (value: string) => Item;
            options?: Array<{
                name: string;
                value: string;
            }>;
        }>;
    };
}

class CommonPropsBuilder {
    constructor(protected item: Item) {}

    protected getStylesValue<T = string>(
        styleName: string,
        defaultValue?: T
    ): string {
        return (
            this.item.styles[styleName]?.readableValue ??
            this.item.styles[styleName]?.value ??
            defaultValue ??
            ""
        );
    }

    protected onStyleChange(
        styleName: string,
        value: string,
        readableValue?: string
    ) {
        this.item.styles[styleName] = {
            value,
            readableValue,
        };
        return this.item.clone();
    }

    props: BuilderProps = {
        general: {
            title: "General",
            items: [
                {
                    name: "Id",
                    type: "text",
                    value: this.item.id,
                    onChange: (value: string) => {
                        this.item.id = value;
                        return this.item.clone();
                    },
                },
            ],
        },
        layout: {
            title: "Layout",
            items: [
                {
                    name: "Background Color",
                    type: "color",
                    value: this.getStylesValue("background-color", "#ffffff"),
                    onChange: (value: string) =>
                        this.onStyleChange("background-color", value),
                },
                {
                    name: "Width",
                    type: "text",
                    value: this.getStylesValue("width"),
                    onChange: (value: string) =>
                        this.onStyleChange("width", value),
                },
                {
                    name: "Height",
                    type: "text",
                    value: this.getStylesValue("height"),
                    onChange: (value: string) =>
                        this.onStyleChange("height", value),
                },
                {
                    name: "Margin",
                    type: this.getStylesValue("margin"),
                    onChange: (value: string) =>
                        this.onStyleChange("margin", value + "px", value),
                },
                {
                    name: "Margin Top",
                    type: "number",
                    value: this.getStylesValue("margin-top"),
                    onChange: (value: string) =>
                        this.onStyleChange("margin-top", value + "px", value),
                },
                {
                    name: "Margin Bottom",
                    type: "number",
                    value: this.getStylesValue("margin-bottom"),
                    onChange: (value: string) =>
                        this.onStyleChange(
                            "margin-bottom",
                            value + "px",
                            value
                        ),
                },
                {
                    name: "Padding",
                    type: "number",
                    value: this.getStylesValue("padding"),
                    onChange: (value: string) =>
                        this.onStyleChange("padding", value + "px", value),
                },
                {
                    name: "Padding Top",
                    type: "number",
                    value: this.getStylesValue("padding-top"),
                    onChange: (value: string) =>
                        this.onStyleChange("padding-top", value + "px", value),
                },
                {
                    name: "Padding Bottom",
                    type: "number",
                    value: this.getStylesValue("padding-bottom"),
                    onChange: (value: string) =>
                        this.onStyleChange(
                            "padding-bottom",
                            value + "px",
                            value
                        ),
                },
            ],
        },
        typography: {
            title: "Typography",
            items: [
                {
                    name: "Font Size",
                    type: "number",
                    value: this.getStylesValue("font-size"),
                    onChange: (value: string) =>
                        this.onStyleChange("font-size", value + "px", value),
                },
                {
                    name: "Color",
                    type: "color",
                    value: this.getStylesValue("color", "#000000"),
                    onChange: (value: string) =>
                        this.onStyleChange("color", value),
                },
                {
                    name: "Text Alignment",
                    type: "select",
                    options: [
                        {
                            name: "Start",
                            value: "start",
                        },
                        {
                            name: "Center",
                            value: "center",
                        },
                        {
                            name: "End",
                            value: "end",
                        },
                    ],
                    value: this.getStylesValue("text-align", "start"),
                    onChange: (value: string) =>
                        this.onStyleChange("text-align", value),
                },
                {
                    name: "Font Weight",
                    type: "select",
                    value: this.getStylesValue("font-weight", "400"),
                    onChange: (value: string) =>
                        this.onStyleChange("font-weight", value),
                    options: [
                        {
                            name: "Thin (100)",
                            value: "100",
                        },
                        {
                            name: "Extra Light (200)",
                            value: "200",
                        },
                        {
                            name: "Light (300)",
                            value: "300",
                        },
                        {
                            name: "Normal (400)",
                            value: "400",
                        },
                        {
                            name: "Medium (500)",
                            value: "500",
                        },
                        {
                            name: "Regular (600)",
                            value: "600",
                        },
                        {
                            name: "Bold (700)",
                            value: "700",
                        },
                        {
                            name: "Extra Bold (800)",
                            value: "800",
                        },
                        {
                            name: "Black (900)",
                            value: "900",
                        },
                    ],
                },
            ],
        },
    };
}

export default CommonPropsBuilder;
