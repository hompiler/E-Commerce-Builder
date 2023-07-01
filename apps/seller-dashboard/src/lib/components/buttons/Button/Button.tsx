"use client";
import React from "react";
import styles from "./Button.module.scss";
import { Button as AntButton, ButtonProps as AntdButtonProps } from "antd";
import { AntConfigs } from "@lib/assets/configs/AntConfigs";

export default function Button({
    children,
    width,
    variant,
    className,
    formType,
    ...rest
}: ButtonProps) {
    width ??= "medium";
    variant ??= "primary";
    return (
        <AntButton
            className={[
                styles.button,
                styles[width],
                styles[variant],
                className,
            ].join(" ")}
            type="primary"
            htmlType={formType}
            {...rest}
        >
            <span className={styles.content}>{children}</span>
        </AntButton>
    );
}

interface ButtonProps extends AntdButtonProps {
    className?: string;
    width?: "medium" | "large" | "small";
    variant?: "primary" | "outline" | "secondary";
    icon?: React.ReactNode;
    formType?: "button" | "submit" | "reset";
}
