import React from "react";
import styles from "./ElementsPane.module.scss";
import Item from "@studio/domain/models/item";
import Element from "@studio/domain/models/element";
import LinearContainer from "@studio/domain/models/linear-container";
import GridContainer from "@studio/domain/models/grid-container";
import Collapse from "@/common/components/lib/collapse";
import Button from "@studio/domain/models/button";
import Container from "@studio/domain/models/container";
import Heading, { HeadingLevel } from "@studio/domain/models/heading";
import Head from "next/head";
import Image from "@studio/domain/models/image";

function ItemsGroup({ items, onAddItem }: any) {
    return (
        <ul>
            {items.map((item: any) => (
                <li
                    onDragCapture={() => console.log("dragging")}
                    onDoubleClick={() => onAddItem(item.generateItem())}
                    key={item.key}
                    style={{
                        cursor: "pointer",
                    }}
                >
                    <span>{item.preview}</span>
                    <span>{item.name}</span>
                </li>
            ))}
        </ul>
    );
}

export default function ElementsPane({ onAddItem }: any) {
    const items = [
        {
            title: "Containers",
            content: [
                {
                    key: "linear-container",
                    name: "Linear Container",
                    preview: (
                        <div
                            style={{
                                display: "flex",
                                gap: "4px",
                            }}
                        >
                            {[4, 30, 4].map((width, index) => (
                                <div
                                    style={{
                                        width: `${width}px`,
                                        height: "24px",
                                        borderRadius: "2px",
                                        background: "white",
                                    }}
                                ></div>
                            ))}
                        </div>
                    ),
                    generateItem: () => new LinearContainer({}),
                },
                {
                    key: "grid-container",
                    name: "Grid Container",
                    preview: (
                        <div
                            style={{
                                display: "grid",
                                gridTemplateColumns: "repeat(2, 1fr)",
                                gap: "4px",
                            }}
                        >
                            {Array.from({ length: 4 }).map((width, index) => (
                                <div
                                    style={{
                                        width: `16px`,
                                        height: "16px",
                                        borderRadius: "2px",
                                        background: "white",
                                    }}
                                ></div>
                            ))}
                        </div>
                    ),
                    generateItem: () => new GridContainer({}),
                },
            ],
        },
        {
            title: "Actions",
            content: [
                {
                    key: "button",
                    name: "Button",
                    preview: (
                        <>
                            {(() => {
                                const button = new LinearContainer(
                                    {},
                                    new Button({}, "Button")
                                );
                                const buttonUi = button.getUIComponent(
                                    () => {}
                                );
                                console.log({ buttonUi });
                                return (
                                    <div>
                                        <style jsx>{`
                                            ${buttonUi.styles}
                                        `}</style>
                                        <main id={"marketmate-studio"}>
                                            {buttonUi.component}
                                        </main>
                                    </div>
                                );
                            })()}
                        </>
                    ),
                    generateItem: () => new Button({}, "button"),
                },
            ],
        },
        {
            title: "Text",
            content: [
                {
                    key: "paragraph",
                    name: "Paragraph",
                    preview: (
                        <p
                            style={{
                                color: "white",
                                border: "1px solid #444",
                                padding: "10px 16px",
                                borderRadius: "8px",
                            }}
                        >
                            Lorem Ipsum Lorem Ipsum
                        </p>
                    ),
                    generateItem: () => new Element("p", {}, "Paragraph"),
                },
                ...Array.from({ length: 6 }).map((_, index) => ({
                    key: `h${index + 1}`,
                    name: `Heading ${index + 1}`,
                    preview: (
                        <>
                            {(() => {
                                const heading = new LinearContainer(
                                    {},
                                    new Heading(
                                        (index + 1) as HeadingLevel,
                                        {},
                                        `Heading ${index + 1}`
                                    )
                                );
                                const headingUi = heading.getUIComponent(
                                    () => {}
                                );
                                return (
                                    <div
                                        style={{
                                            color: "white",
                                            border: "1px solid #444",
                                            padding: "10px 16px",
                                            borderRadius: "8px",
                                        }}
                                    >
                                        <style jsx>{`
                                            ${headingUi.styles}
                                        `}</style>
                                        <main id={"marketmate-studio"}>
                                            {headingUi.component}
                                        </main>
                                    </div>
                                );
                            })()}
                        </>
                    ),
                    generateItem: () =>
                        new Heading(
                            (index + 1) as HeadingLevel,
                            {},
                            `Header ${index + 1}`
                        ),
                })),
            ],
        },
        {
            title: "Visuals",
            content: [
                {
                    key: "image",
                    name: "Image",
                    preview: (
                        <div>
                            <img
                                width="40px"
                                height="40px"
                                src={"/images/picture.svg"}
                                alt=""
                            />
                        </div>
                    ),
                    generateItem: () => new Image({}),
                },
            ],
        },
        {
            title: "Inputs",
            content: [
                ...["text", "number", "password"].map((type) => ({
                    key: type,
                    name: `${type} Input Field`,
                    generateItem: () =>
                        new Element("input", {}, `Input ${type}`),
                })),
            ],
        },
    ];

    return (
        <div className={styles.container}>
            <Collapse
                items={items.map((it) => ({
                    title: it.title,
                    content: (
                        <ItemsGroup items={it.content} onAddItem={onAddItem} />
                    ),
                }))}
            />
        </div>
    );
}
