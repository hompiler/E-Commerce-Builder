"use client";
import React from "react";
import styles from "./Nav.module.scss";
import { IconButtonGroup } from "@lib/components/buttons/IconButton/IconButtonGroup";
import { SettingsIcon, LayersIcon, PageIcon, PlusIcon } from "@icons/index";

export default function Nav({ className, selectedPane, setSelectedPane }: any) {
    return (
        <nav className={[className, styles.nav].join(" ")}>
            <IconButtonGroup
                className={styles.actions}
                selected={selectedPane}
                onChange={setSelectedPane}
                actions={[
                    {
                        key: "elements",
                        icon: <PlusIcon />,
                        title: "Elements",
                    },
                    {
                        key: "global",
                        icon: <LayersIcon />,
                        title: "Layers",
                    },
                    {
                        key: "pages",
                        icon: <PageIcon />,
                        title: "Pages",
                    },
                    {
                        key: "settings",
                        icon: <SettingsIcon />,
                        title: "Settings",
                    },
                ]}
            />
        </nav>
    );
}
