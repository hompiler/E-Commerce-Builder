import React from "react";
import styles from "./Header.module.scss";
import BackIcon from "@icons/back.svg";
import IconButton from "@/common/components/buttons/IconButton";
import Button from "@/common/components/buttons/Button";

export default function Header({ className }: any) {
    return (
        <header className={[className, styles.header].join(" ")}>
            <div className={styles.title}>
                <IconButton icon={<BackIcon />} />
                <h1>Hazem Website</h1>
                <p>www.hompiler.com</p>
            </div>
            <div>
                <Button>Publish</Button>
            </div>
        </header>
    );
}
