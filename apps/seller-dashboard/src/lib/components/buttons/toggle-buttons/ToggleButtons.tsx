import React from "react";
import styles from "./ToggleButtons.module.scss";

interface ToggleButtonsProps {
    selectedItem: string;
    items: Array<{ name: string; value: any }>;
}

export default function ToggleButtons({
    selectedItem,
    items,
}: ToggleButtonsProps) {
    return (
        <div className={styles.container}>
            {items.map((it) => (
                <button
                    className={selectedItem === it.name ? styles.selected : ""}
                    key={it.name}
                >
                    {it.name}
                </button>
            ))}
        </div>
    );
}
