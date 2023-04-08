import React, { useEffect, useMemo, useState } from "react";
import styles from "./PropsPane.module.scss";
import ItemsProps, { getPropsForItem } from "@studio/presntation/items-props";
import * as events from "events";
import Item from "@studio/domain/models/item";
import Collapse from "@/common/components/lib/collapse";
import { Form, Input, Select } from "antd";

function PropInput({ item, onChange }: any) {
    const [value, setValue] = useState<any>(undefined);
    switch (item.type) {
        case "select":
            return (
                <Select
                    id={item.name}
                    value={item.value}
                    onChange={(v) => onChange(item, v)}
                >
                    {item.options.map((option: any) => (
                        <Select.Option
                            id={option.name}
                            key={option.value}
                            value={option.value}
                        >
                            {option.name}
                        </Select.Option>
                    ))}
                </Select>
            );
        case "file":
            return (
                <Input
                    type={item.type}
                    value={value}
                    onChange={(e) => {
                        setValue(e.target.value);
                        const file = e.target.files?.[0];
                        if (!file) return;
                        const url = URL.createObjectURL(file);
                        onChange(item, url);
                    }}
                />
            );
        default:
            return (
                <Input
                    type={item.type}
                    value={item.value}
                    onChange={(e) => onChange(item, e.target.value)}
                />
            );
    }
}

function PropsGroup({ group, onItemChange }: any) {
    function onChange(item: any, e: any) {
        const newItem = item.onChange(e);
        onItemChange(newItem);
    }

    const form = Form.useForm();

    useEffect(() => {
        console.log({ group });
    }, [group]);

    return (
        <Form layout="vertical" className={styles.group}>
            <div className={styles.groupItems}>
                {group.items.map((item: any) => {
                    return (
                        <>
                            <Form.Item
                                style={{
                                    marginBottom: "12px",
                                }}
                                key={item.name}
                                name={item.name}
                                label={item.name}
                            >
                                {<></>}
                                <PropInput item={item} onChange={onChange} />
                            </Form.Item>
                        </>
                    );
                })}
            </div>
        </Form>
    );
}

export default function PropsPane({
    className,
    selectedItem,
    onItemChange,
}: any) {
    const propsView = getPropsForItem(selectedItem);
    console.log({ propsView, selectedItem: selectedItem.constructor.name });
    return (
        <div className={[styles.container, className].join(" ")}>
            <Collapse
                items={Object.values(propsView.props).map((it) => ({
                    title: it.title,
                    content: (
                        <PropsGroup group={it} onItemChange={onItemChange} />
                    ),
                }))}
            />
            {/*{Object.values(propsView.props).map((group: any) => (*/}

            {/*))}*/}
        </div>
    );
}
