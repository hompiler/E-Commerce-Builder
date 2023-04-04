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
    new Element(
        "h1",
        {
            id: "header1",
            styles: {
                color: { value: "#e64f30" },
            },
        },
        "What is Lorem Ipsum?"
    ),
    new Element(
        "p",
        {
            id: "paragraph1",
            styles: {
                background: { value: "red" },
                padding: {
                    value: "16px",
                },
            },
        },
        `Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.`
    ),
    new Container(
        "div",
        {
            styles: {
                display: {
                    value: "block",
                },
                color: {
                    value: "#363636",
                },
                "margin-top": {
                    value: "16px",
                },
                background: {
                    value: "black",
                },
            },
        },
        new Container(
            "div",
            {
                styles: {
                    display: {
                        value: "block",
                    },
                    color: {
                        value: "#363636",
                    },
                    "margin-top": {
                        value: "16px",
                    },
                    background: {
                        value: "pink",
                    },
                },
            },
            "hehe"
        ),
        new Container(
            "div",
            {
                styles: {
                    color: {
                        value: "red",
                    },
                    "margin-top": {
                        value: "16px",
                    },
                    background: {
                        value: "black",
                    },
                },
            },
            "dwdwwdw"
        )
    ),
    new Element(
        "h2",
        {
            id: "header2",
            styles: {
                color: {
                    value: "#363636",
                },
                "margin-top": {
                    value: "16px",
                },
                background: {
                    value: "pink",
                },
            },
        },
        "Why Lorem Ipsum?"
    )
);
export default function EditorMode({}) {
    // const testingPages = testing;
    // const router = useRouter();
    // const currentPageKey: string = router.query.page?.toString() ?? "home";
    // const currentPage = testingPages[currentPageKey];

    const [homeChildren, setHomeChildren] = useState(testItem);
    const [selectedLevels, setSelectedLevels] = useState([-1]);
    const previousSelectedLevels = useRef<number[]>();
    const [newItem, setNewItem] = useState<Item>();
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
                    value: "none",
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

    return (
        <>
            <StudioLayout
                selectedItem={selectedItem}
                page={homeChildren}
                onSelect={setSelectedLevels}
                onAddItem={(item) => setNewItem(item)}
            />
        </>
    );
}
