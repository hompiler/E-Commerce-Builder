import React, { useEffect, useMemo, useRef, useState } from "react";
import styles from "./EditorMode.module.scss";
import StudioLayout from "@studio/presntation/layout";
import testing from "@studio/testing";
import { useRouter } from "next/router";
import Head from "next/head";
import Item from "@studio/domain/models/item";
import Container from "@studio/domain/models/container";
import Element from "@studio/domain/models/element";
import getSelectedItems from "@studio/domain/selected-item-finder";

const testItem = new Container(
    "div",
    {
        styles: {
            padding: {
                value: "16px",
            },
            margin: {
                value: "4px",
            },
        },
        id: "home-page",
    },
);
export default function EditorMode({}) {
    // const testingPages = testing;
    const router = useRouter();
    const currentPageKey: string = router.query.page?.toString() ?? "home";
    // useEffect(() => {
    //     const currentPage =
    //         localStorage.getItem(`page-${currentPageKey}`) ?? "";
    //     const currentPageObj = JSON.parse(currentPage);
    //     console.log({ currentPageObj });
    //     setHomeChildren(currentPageObj ?? testItem);
    // }, []);
    // const currentPage = testingPages[currentPageKey];

    const [homeChildren, setHomeChildren] = useState(testItem);
    const [selectedLevels, setSelectedLevels] = useState([-1]);
    const previousSelectedLevels = useRef<number[]>();
    const [newItem, setNewItem] = useState<Item>();
    const [changedItem, setChangedItem] = useState<Item>();
    const selectedItem = useMemo(
        () => getSelectedItems(homeChildren, selectedLevels),
        [selectedLevels]
    );
    useEffect(() => {
        console.log({
            selectedLevels: JSON.stringify(selectedLevels),
            previousSelectedLevels: JSON.stringify(
                previousSelectedLevels.current ?? []
            ),
        });
        if (
            JSON.stringify(previousSelectedLevels.current ?? []) ===
            JSON.stringify(selectedLevels)
        )
            return;
        const copy = homeChildren.clone();
        const element = getSelectedItems(copy, selectedLevels);
        element.styles = {
            ...element.styles,
            outline: {
                value: "4px solid #e64f30",
            },
        };
        console.log({ element });

        if (previousSelectedLevels.current) {
            const previousElement = getSelectedItems(
                copy,
                previousSelectedLevels.current
            );
            previousElement.styles = {
                ...previousElement.styles,
                outline: {
                    value:
                        previousElement instanceof Container
                            ? "1px solid #101010"
                            : "none",
                },
            };
        }
        previousSelectedLevels.current = selectedLevels;

        console.log({ copy });
        setHomeChildren(copy);
    }, [JSON.stringify(selectedLevels)]);

    useEffect(() => {
        console.log({ homeChildren });
    }, [homeChildren]);

    useEffect(() => {
        if (!newItem) return;
        const copy = homeChildren.clone();
        console.log({ selectedLevels });
        const element = getSelectedItems(copy, selectedLevels);
        console.log({ element3: element });
        if (element instanceof Container) element.push(newItem);
        setHomeChildren(copy);
        setNewItem(undefined);
    }, [newItem]);

    useEffect(() => {
        if (!changedItem) return;
        const copy = homeChildren.clone();
        const element = getSelectedItems(copy, selectedLevels);
        if (element instanceof Item) element.styles = changedItem.styles;

        setHomeChildren(copy);
        setChangedItem(undefined);
    }, [changedItem]);

    return (
        <>
            <StudioLayout
                onItemChange={(item) => {
                    setChangedItem(item);
                }}
                selectedItem={selectedItem}
                page={homeChildren}
                onSelect={setSelectedLevels}
                onAddItem={(item) => setNewItem(item)}
                pageName={currentPageKey}
            />
        </>
    );
}
