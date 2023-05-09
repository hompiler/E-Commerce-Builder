"use client";
import React from "react";
import styles from "./Button.module.scss";
import { Button as AntButton, ButtonProps } from "antd";
import { AntConfigs } from "@lib/assets/configs/AntConfigs";

export default function Button({ children, ...rest }: ButtonProps & {}) {
    return (
        <AntButton className={styles.container} type="primary" {...rest}>
            {children}
        </AntButton>
    );
}
