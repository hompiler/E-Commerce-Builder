import CommonProps from "@studio/presntation/items-props/common-props";

const LinearContainerProps = {
    ...CommonProps,
    layout: {
        ...CommonProps.layout,
        items: [
            ...CommonProps.layout.items,
            {
                name: "Gap",
                type: "number",
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
            },
        ],
    },
};

export default LinearContainerProps;
