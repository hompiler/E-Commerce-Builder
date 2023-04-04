import React, { useMemo } from "react";
import styles from "./PropsPane.module.scss";
import ItemsProps, { getPropsForItem } from "@studio/presntation/items-props";

function PropsGroup({ group }: any) {
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
                                    <select name={item.name} id={item.name}>
                                        {item.options.map((option: any) => (
                                            <option
                                                id={option.name}
                                                key={option.value}
                                            >
                                                {option.name}
                                            </option>
                                        ))}
                                    </select>
                                ) : (
                                    <input type={item.type} />
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default function PropsPane({ className, selectedItem }: any) {
    console.log({ selectedItem: selectedItem.constructor.name });
    const propsView = useMemo(
        () => {
            console.log("im here slut");
            return getPropsForItem(selectedItem)
        },
        [selectedItem.constructor.name]
    );
    console.log({ propsView, selectedItem: selectedItem.constructor.name });
    return (
        <div className={[styles.container, className].join(" ")}>
            {Object.values(propsView).map((group: any) => (
                <PropsGroup key={group.title} group={group} />
            ))}
        </div>
    );
}
