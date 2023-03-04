"use client";
import { Button } from "antd";
import React from "react";
import styles from "./IconButton.module.scss";

export default function IconButton({
    icon,
    selectable,
    selected,
    ...props
}: any) {
    return (
        <Button
            {...props}
            aria-label="icon-button"
            className={[
                styles.iconButton,
                selectable ? styles.selection : "",
                selected ? styles.selected : "",
            ].join(" ")}
            icon={icon}
        />
    );
}
