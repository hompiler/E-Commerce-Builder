import React, { useState } from "react";
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
                    value: "16px"
                }
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
                        value: "16px"
                    }
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
                "dev1",
                "dev",
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
                new Item(
                    "dev2",
                    "dev",
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
                    "hehe"
                ),
                new Item(
                    "dev3",
                    "dev",
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

    function onSelect(levels: number[]) {
        console.log({levels})
        if (levels[0] === -1) {
            console.log(homeChildren);
        }
        else {

        }
    }

    return (
        <>
            <StudioLayout
                page={homeChildren}
                onSelect={onSelect}
                // onAddItem={(item) => setHomeChildren((prev) => [...prev, item])}
            />
        </>
    );
}
