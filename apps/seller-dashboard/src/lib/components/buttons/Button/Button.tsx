"use client";
import React from "react";
import styles from "./Button.module.scss";
import { Button as AntButton, ButtonProps as AntdButtonProps } from "antd";
import { AntConfigs } from "@lib/assets/configs/AntConfigs";

export default function Button({
    children,
    width,
    variant,
    ...rest
}: ButtonProps) {
    width ??= "medium";
    variant ??= "primary";
    return (
        <AntButton
            className={[styles.button, styles[width], styles[variant]].join(
                " "
            )}
            type="primary"
            {...rest}
        >
            <span className={styles.content}>{children}</span>
        </AntButton>
    );
}

interface ButtonProps extends AntdButtonProps {
    width?: "medium" | "large" | "small";
    variant?: "primary" | "outline" | "secondary";
    icon?: React.ReactNode;
}
