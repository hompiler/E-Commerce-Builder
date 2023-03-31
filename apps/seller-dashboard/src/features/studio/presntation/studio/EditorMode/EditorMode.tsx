import React, { useEffect, useMemo, useRef, useState } from "react";
import styles from "./EditorMode.module.scss";
import StudioLayout from "@studio/presntation/layout";
import testing from "@studio/testing";
import { useRouter } from "next/router";
import Head from "next/head";
import Item from "@studio/domain/models/item";

export default function EditorMode({}) {
    // const testingPages = testing;
    // const router = useRouter();
    // const currentPageKey: string = router.query.page?.toString() ?? "home";
    // const currentPage = testingPages[currentPageKey];

    const [homeChildren, setHomeChildren] = useState(
        new Item(
            "home-page",
            "div",
            {
                padding: {
                    value: "16px",
                },
            },
            new Item(
                "header1",
                "h1",
                {
                    color: { value: "#e64f30" },
                },
                "What is Lorem Ipsum?"
            ),
            new Item(
                "paragraph1",
                "p",
                {
                    background: { value: "red" },
                    padding: {
                        value: "16px",
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
            new Item(
                "div1",
                "div",
                {
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
                new Item(
                    "div2",
                    "dv",
                    {
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
                    "hehe"
                ),
                new Item(
                    "div3",
                    "div",
                    {
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
                    "dwdwwdw"
                )
            ),
            new Item(
                "header2",
                "h2",
                {
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
                "Why Lorem Ipsum?"
            )
        )
    );
    const [selectedLevels, setSelectedLevels] = useState([-1]);
    const previousSelectedLevels = useRef<number[]>();
    const [newItem, setNewItem] = useState<Item>();
    // const selectedItem = useMemo(
    //     () => getSelectedItems(selectedLevels),
    //     [selectedLevels]
    // );
    // console.log({ selectedItem });

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
                value: "4px solid blue",
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

    function getSelectedItems(root: Item, levels: number[]) {
        if (levels[0] === -1) {
            return root;
        } else {
            const element = levels.reduce((prev: any, level) => {
                if (typeof prev === "undefined") return root.children[level];
                else return prev.children[level];
            }, undefined);

            return element;
        }
    }

    function onAddItem(item: Item) {
        console.log("hehe");
        console.log({ item });
    }

    useEffect(() => {
        if (!newItem) return;
        const copy = homeChildren.clone();
        console.log({ selectedLevels });
        const element = getSelectedItems(copy, selectedLevels);
        element.children.push(newItem);
        setHomeChildren(copy);
        setNewItem(undefined);
    }, [newItem]);

    return (
        <>
            <StudioLayout
                page={homeChildren}
                onSelect={setSelectedLevels}
                onAddItem={(item) => setNewItem(item)}
            />
        </>
    );
}
