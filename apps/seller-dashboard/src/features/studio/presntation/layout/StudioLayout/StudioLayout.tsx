import React, { useMemo, useState } from "react";
import styles from "./StudioLayout.module.scss";
import Logo from "@icons/logo.svg";
import Nav from "../Nav";
import Header from "../Header";
import MainCanvas from "@studio/presntation/canvas";
import PagesPane from "../PagesPane";
import ElementsPane from "../ElementsPane";
import Item from "@studio/domain/models/item";
import PropsPane from "@studio/presntation/layout/PropsPane";

interface StudioLayoutProps {
    page: any;
    onAddItem: (item: Item) => any;
    onSelect: (levels: number[]) => any;
    selectedItem: Item;
    onItemChange: (item: Item) => any;
    // allPages: any;
}

export default function StudioLayout({
    page,
    onAddItem,
    onSelect,
    selectedItem,
    onItemChange,
}: StudioLayoutProps) {
    const [selectedPane, setSelectedPane] = useState<string>("");
    const panes = useMemo<{
        [feature: string]: { title: string; component: React.ReactNode };
    }>(
        () => ({
            elements: {
                title: "Elements",
                component: <ElementsPane onAddItem={onAddItem} />,
            },
            global: {
                title: "Global Layout",
                component: <div></div>,
            },
            pages: {
                title: "Pages",
                component: <PagesPane />,
            },
        }),
        []
    );
    return (
        <div className={[styles.layout].join(" ")}>
            <div className={styles.logo}>
                <Logo />
            </div>
            <Header className={styles.header} />
            <Nav
                className={styles.nav}
                selectedPane={selectedPane}
                setSelectedPane={setSelectedPane}
            />
            <aside
                className={[
                    styles.editPane,
                    selectedPane ? styles.editOpen : "",
                ].join(" ")}
            >
                {panes[selectedPane]?.component ?? <div>In Dev</div>}
            </aside>
            <PropsPane
                className={styles.propsPane}
                selectedItem={selectedItem}
                onItemChange={onItemChange}
            />
            <MainCanvas className={styles.studio} onSelect={onSelect}>
                {page}
            </MainCanvas>
        </div>
    );
}
