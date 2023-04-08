import React from "react";
import { Collapse as AntCollapse } from "antd";
import ArrowIcon from "./arrow.svg";

export default function Collapse({ items, children }: CollapseProps) {
    return (
        <AntCollapse
            className={"mm-collapse"}
            expandIconPosition={"end"}
            defaultActiveKey={Array.from(
                { length: items?.length ?? 1 },
                (_, i) => i
            )}
            expandIcon={({ isActive }) => {
                return (
                    <span
                        className={"mm-collapse-icon"}
                        style={{
                            transform: isActive
                                ? "rotate(0)"
                                : "rotate(180deg)",
                        }}
                    >
                        <ArrowIcon />
                    </span>
                );
            }}
        >
            {items
                ? items.map((item, index) => (
                      <AntCollapse.Panel header={item.title} key={index}>
                          {item.content}
                      </AntCollapse.Panel>
                  ))
                : children}
        </AntCollapse>
    );
}

interface CollapseProps {
    items?: Array<{
        title: string;
        content: React.ReactNode;
    }>;
    children?: React.ReactNode;
}
