import React from "react";
import Link from "next/link";
import styles from "../Navbar.module.scss";
import { useRouter } from "next/router";
import { NavRoute } from "@layout/navbar/nav-routes/index";

export default function NavItem(props: NavItemProps) {
    const { pathname } = useRouter();
    const active = props.path === pathname;
    const Icon = props.icon;
    return (
        <li className={styles.navItem} data-active={active}>
            <div className={styles.activeIndicator}>
                <div />
            </div>
            <Link href={props.path} className={styles.item}>
                <span className={styles.navItemIcon}>{Icon}</span>
                <span className={styles.itemName}>{props.name}</span>
            </Link>
        </li>
    );
}

interface NavItemProps extends NavRoute {}
