import Container from "@studio/domain/models/container";
import LinearContainer from "@studio/domain/models/linear-container";
import Image from "@studio/domain/models/image";
import Button from "@studio/domain/models/button";
import Heading from "@studio/domain/models/heading";
import Element from "@studio/domain/models/element";

const studioData: {
    [key: string]: any;
} = {
    home: {
        component: new LinearContainer(
            {
                styles: {
                    "flex-direction": {
                        value: "column",
                    },
                },
                id: "home-page",
            },
            new LinearContainer(
                {
                    styles: {
                        "flex-direction": {
                            value: "row",
                        },
                        "align-items": {
                            value: "center",
                        },
                        padding: {
                            value: "16px",
                        },
                        "flex-wrap": {
                            value: "wrap",
                        },
                        width: {
                            value: "100%",
                        },
                        "background-color": {
                            value: "#e1d9d6",
                        },
                        gap: {
                            value: "32px",
                        },
                    },
                },
                new Image({
                    styles: {
                        "max-width": {
                            value: "350px",
                        },
                        "max-height": {
                            value: "350px",
                        },
                        "aspect-ratio": {
                            value: "1/1",
                        },
                    },
                }),
                new LinearContainer(
                    {
                        styles: {
                            "flex-direction": {
                                value: "column",
                            },
                            "justify-content": {
                                value: "flex-start",
                            },
                        },
                    },
                    new Element("p", {}, "HOT DEALS THIS WEEK"),
                    new Element("h3", {}, "SALE UP 50% MODERN FURNITURE"),
                    new Element(
                        "button",
                        {
                            styles: {
                                "background-color": {
                                    value: "#0000 !important",
                                },
                                width: {
                                    value: "fit-content",
                                },
                                padding: {
                                    value: "8px 24px",
                                },
                                border: {
                                    value: "2px solid #323334 !important",
                                },
                                color: {
                                    value: "#323334 !important",
                                },
                                display: {
                                    value: "inline-block",
                                },
                                "justify-self": {
                                    value: "flex-start",
                                },
                            },
                        },
                        "View More"
                    )
                )
            )
        ),
    },

    allProducts: {
        component: new Container(
            "div",
            {
                styles: {
                    padding: {
                        value: "16px",
                    },
                    margin: {
                        value: "4px",
                    },
                },
                id: "home-page",
            },
            "All Products"
        ),
    },

    cart: {
        component: new Container(
            "div",
            {
                styles: {
                    padding: {
                        value: "16px",
                    },
                    margin: {
                        value: "4px",
                    },
                },
                id: "home-page",
            },
            "Cart"
        ),
    },

    privacyPolicy: {
        component: new Container("div", {
            styles: {
                padding: {
                    value: "16px",
                },
                margin: {
                    value: "4px",
                },
            },
            id: "home-page",
        }),
    },
};

export default class StudioRepository {
    static get() {}

    static getById(id: string) {
        return studioData[id];
    }

    static post(id: string, data: Container) {
        studioData[id].component = data;
    }
}
