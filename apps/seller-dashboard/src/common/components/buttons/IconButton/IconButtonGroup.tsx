"use client";

import IconButton from "@/common/components/buttons/IconButton/IconButton";
import React from "react";
import styles from "./IconButton.module.scss";
import { useRouter } from "next/navigation";

export function IconButtonGroup({
    actions,
    className,
    selected,
    onChange,
    direction,
    itemClassName,
}: any) {
    return (
        <ul className={[styles.iconGroup, className].join(" ")}>
            {actions.map((action: any) => (
                <li key={action.key}>
                    <IconButton
                        onClick={() =>
                            onChange(
                                action.key === selected ? undefined : action.key
                            )
                        }
                        icon={action.icon}
                        selectable
                        selected={selected === action.key}
                    />
                </li>
            ))}
        </ul>
    );
}
