import styles from "@layout/navbar/Navbar.module.scss";
import NavItem from "@layout/navbar/nav-routes/NavItem";
import React from "react";

export default function NavRoutes({ routes }: { routes: Array<NavRoute> }) {
    return (
        <ul className={styles.linksList}>
            {routes.map((route) => (
                <NavItem key={route.path} {...route} />
            ))}
        </ul>
    );
}

export interface NavRoute {
    path: string;
    name: string;
    icon: string;
}
