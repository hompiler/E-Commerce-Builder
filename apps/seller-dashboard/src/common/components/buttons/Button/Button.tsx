"use client";
import React from "react";
import styles from "./Button.module.scss";
import { Button as AntButton, ButtonProps } from "antd";
import { AntConfigs } from "@/common/assets/configs/AntConfigs";

export default function Button({ children }: ButtonProps & {}) {
    return (
        <AntConfigs>
            <AntButton className={styles.container} type="primary">
                {children}
            </AntButton>
        </AntConfigs>
    );
}
