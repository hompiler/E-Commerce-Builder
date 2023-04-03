const CommonProps = {
    general: {
        title: "General",
        items: [
            {
                name: "Id",
                type: "text",
            },
        ],
    },
    layout: {
        title: "Layout",
        items: [
            {
                name: "Width",
                type: "number",
            },
            {
                name: "Height",
                type: "number",
            },
            {
                name: "Margin",
                type: "number",
            },
            {
                name: "Padding",
                type: "number",
            },
        ],
    },
    typography: {
        title: "Typography",
        items: [
            {
                title: "Font Size",
                inputType: "number",
                styleName: "font-size",
            },
            {
                title: "Color",
                inputType: "color",
                styleName: "color",
            },
            {
                title: "Font Weight",
                inputType: "select",
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
                styleName: "font-size",
            },
        ],
    },
};

export default CommonProps;
