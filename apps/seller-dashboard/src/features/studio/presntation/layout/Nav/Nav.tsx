"use client";
import React from "react";
import styles from "./Nav.module.scss";
import PlusIcon from "@icons/plus.svg";
import PagesIcon from "@icons/page.svg";
import LayersIcon from "@icons/layers.svg";
import { IconButtonGroup } from "@/common/components/buttons/IconButton/IconButtonGroup";

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
                        icon: <PagesIcon />,
                        title: "Pages",
                    },
                    {
                        key: "settings",
                        icon: <PagesIcon />,
                        title: "Settings",
                    },
                ]}
            />
        </nav>
    );
}
