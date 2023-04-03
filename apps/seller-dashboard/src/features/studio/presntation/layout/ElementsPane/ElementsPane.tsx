import React from "react";
import styles from "./ElementsPane.module.scss";
import Item from "@studio/domain/models/item";
import Element from "@studio/domain/models/element";
import LinearContainer from "@studio/domain/models/linear-container";
import GridContainer from "@studio/domain/models/grid-container";

export default function ElementsPane({ onAddItem }: any) {
    const elements = [
        {
            key: "linear-container",
            name: "Linear Container",
            generateItem: () => new LinearContainer({}),
        },
        {
            key: "grid-container",
            name: "Grid Container",
            generateItem: () => new GridContainer({}),
        },
        {
            key: "button",
            name: "Button",
            generateItem: () => new Element("button", {}, "button"),
        },
        {
            key: "h1",
            name: "Heading 1",
            generateItem: () => new Element("h1", {}, "header"),
        },
    ];

    return (
        <div className={styles.container}>
            {elements.map((element) => (
                <div
                    onDragCapture={() => console.log("dragging")}
                    onDoubleClick={() => onAddItem(element.generateItem())}
                    key={element.key}
                    style={{
                        padding: "8px",
                        cursor: "pointer",
                    }}
                >
                    {element.name}
                </div>
            ))}
        </div>
    );
}
