import React, { useMemo } from "react";
import styles from "./PropsPane.module.scss";
import ItemsProps, { getPropsForItem } from "@studio/presntation/items-props";
import * as events from "events";
import Item from "@studio/domain/models/item";

function PropsGroup({ group, onItemChange }: any) {
    function onChange(item: any, e: any) {
        const newItem = item.onChange(e.target.value);
        onItemChange(newItem);
    }

    return (
        <div className={styles.group}>
            <header>{group.title}</header>
            <div className={styles.groupItems}>
                {group.items.map((item: any) => {
                    return (
                        <div key={item.name}>
                            <label htmlFor={item.name}>{item.name}</label>
                            <div>
                                {item.type === "select" ? (
                                    <select
                                        name={item.name}
                                        id={item.name}
                                        value={item.value}
                                        onChange={(e) => onChange(item, e)}
                                    >
                                        {item.options.map((option: any) => (
                                            <option
                                                id={option.name}
                                                key={option.value}
                                                value={option.value}
                                            >
                                                {option.name}
                                            </option>
                                        ))}
                                    </select>
                                ) : (
                                    <input
                                        type={item.type}
                                        value={item.value}
                                        onChange={(e) => onChange(item, e)}
                                    />
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default function PropsPane({
    className,
    selectedItem,
    onItemChange,
}: any) {
    console.log({ selectedItem: selectedItem.constructor.name });
    const propsView = getPropsForItem(selectedItem);
    console.log({ propsView, selectedItem: selectedItem.constructor.name });
    return (
        <div className={[styles.container, className].join(" ")}>
            {Object.values(propsView.props).map((group: any) => (
                <PropsGroup
                    key={group.title}
                    group={group}
                    onItemChange={onItemChange}
                />
            ))}
        </div>
    );
}
