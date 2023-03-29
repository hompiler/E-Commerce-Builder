import React from "react";
import styles from "./ElementsPane.module.scss";
import Item from "@studio/domain/models/item";

export default function ElementsPane({ onAddItem }: any) {
    const elements = [
        {
            key: "button",
            name: "Button",
            generateItem: () => new Item("button", "button", {}, "button"),
        },
        {
            key: "h1",
            name: "Heading 1",
            generateItem: () => new Item("h1", "h1", {}, "header"),
        },
    ];

    return (
        <div className={styles.container}>
            {elements.map((element) => (
                <div
                    // onDoubleClick={}
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
