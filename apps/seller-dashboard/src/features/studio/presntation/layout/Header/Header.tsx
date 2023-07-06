import React from "react";
import styles from "./Header.module.scss";
import BackIcon from "@icons/back.svg";
import IconButton from "@lib/components/buttons/IconButton";
import Button from "@lib/components/buttons/Button";

export default function Header({ className, onPublish }: any) {
    return (
        <header className={[className, styles.header].join(" ")}>
            <div className={styles.title}>
                <IconButton icon={<BackIcon />} />
                <h1>Hazem's Store</h1>
                <p>hazem.marketmate.com</p>
            </div>
            <div>
                <Button onClick={onPublish}>Publish</Button>
            </div>
        </header>
    );
}
