import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.scss";
import CollapseButton from "./collapse-button/CollapseButton";
import NavItem from "./nav-routes/NavItem";
import PropTypes from "prop-types";
import Image from "next/image";
import NavLogo from "@components/layout/navbar/nav-logo/NavLogo";
import NavRoutes, { NavRoute } from "@layout/navbar/nav-routes";

export default function Navbar({ routes }: NavbarProps) {
    const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

    useEffect(() => {
        const currentWidth = getComputedStyle(
            document.querySelector(":root") ?? document.body
        ).getPropertyValue(
            isCollapsed ? "--dimension-nav-collapsed-w" : "--dimension-nav-w"
        );
        const root: any = document.querySelector(":root");
        root.style.setProperty("--dimension-nav-w-current", currentWidth);
    }, [isCollapsed]);
    return (
        <nav
            className={[
                styles.nav,
                isCollapsed ? styles.navCollapsed : styles.navFull,
            ].join(" ")}
        >
            <NavLogo isCollapsed={isCollapsed} />
            <NavRoutes routes={routes} />
        </nav>
    );
}

interface NavbarProps {
    routes: Array<NavRoute>;
}
