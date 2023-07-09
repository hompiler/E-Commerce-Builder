import React from "react";
import styles from "./CanvasNav.module.scss";
import Link from "next/link";
import { MenuIcon } from "@icons";

export default function CanvasNav({
    colors,
    logo,
    isInDeployment = false,
}: {
    colors: any;
    logo?: any;
    isInDeployment?: boolean;
}) {
    return (
        <nav
            className={styles.canvasNav}
            style={{
                position: "sticky",
                top: 0,
                background: colors.background,
                zIndex: 100,
                display: "flex",
                alignItems: "center",
                borderBottom: `1px solid ${colors.onBackground}`,
            }}
        >
            <div className={styles.logoContainer}>
                {logo ?? <>MarketMate</>}
            </div>
            <div className={styles.linksDesktop}>
                {[
                    {
                        name: "Home",
                        route: "/",
                    },
                    {
                        name: "All Products",
                        route: "/studio/preview/all-products",
                        active: true,
                    },
                    {
                        name: "Cart",
                        route: "/cart",
                    },
                    {
                        name: "Privacy Policy",
                        route: "/about",
                    },
                ].map((link) =>
                    isInDeployment ? (
                        <Link
                            href={link.route}
                            key={link.name}
                            className={link.active ? "text-primary" : ""}
                        >
                            {link.name}
                        </Link>
                    ) : (
                        <div key={link.name}>{link.name}</div>
                    )
                )}
            </div>
            <div className={styles.menuButton}>
                <MenuIcon />
            </div>
        </nav>
    );
}
