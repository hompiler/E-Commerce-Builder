import React from "react";
import Link from "next/link";
import styles from "../Navbar.module.scss";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import { NavRoute } from "@layout/navbar/nav-routes/index";

export default function NavItem(props: NavItemProps) {
    const { pathname } = useRouter();
    const active = props.path === pathname;
    const Icon = props.icon;
    return (
        <li>
            <Link
                href={props.path}
                className={styles.item}
                data-active={active}
            >
                <span className={styles.itemIcon}>
                </span>
                <span className={styles.itemName}>{props.name}</span>
            </Link>
        </li>
    );
}

interface NavItemProps extends NavRoute {}
