import React from "react";
import styles from "./Filters.module.scss";
import Select from "@components/form-components/select";
import Input from "@components/form-components/input";
import ToggleButtons from "@components/buttons/toggle-buttons";

export default function Filters({ children }: { children?: React.ReactNode }) {
    return (
        <div className={styles.container}>
            <div className={styles.firstSection}>
                <Input placeholder="Search products by name or keywords" />
                <Select placeholder={"Sort By"} options={[]} />
                <Select placeholder={"Collection Type"} options={[]} />
            </div>
            <div className={styles.secondSection}>
                <ToggleButtons
                    selectedItem={"Published"}
                    items={[
                        {
                            name: "Published",
                            value: "published",
                        },
                        {
                            name: "Draft",
                            value: "draft",
                        },
                    ]}
                />
                {children}
            </div>
        </div>
    );
}
