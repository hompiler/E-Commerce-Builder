import styles from "./NavLogo.module.scss";
import Image from "next/image";
import React from "react";

export default function NavLogo({ isCollapsed }: { isCollapsed: boolean }) {
    return (
        <div
            className={[
                styles.navLogo,
                isCollapsed ? styles.collapsed : styles.expanded,
            ].join(" ")}
        >
            <div className={styles.market}>
                <span className={styles.first}>M</span>
                <span className={styles.extended}>arket</span>
            </div>
            <div className={styles.mate}>
                <span className={styles.first}>M</span>
                <span className={styles.extended}>ate</span>
            </div>
        </div>
    );
}
