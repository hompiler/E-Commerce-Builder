import Navbar from "@layout/navbar";
import styles from "./Layout.module.scss";
import { NavRoute } from "@layout/navbar/nav-routes";
import React, { useState } from "react";
import LayoutContext from "@layout/helpers/layout-context";

export default function Layout({
    routes,
    children,
}: {
    routes: Array<NavRoute>;
    children: React.ReactNode;
}) {
    const [layoutOptions, setLayoutOptions] = useState({
        isMobile: false,
        enableNav: true,
    });

    function selectLayoutOption(options: {
        isMobile?: boolean;
        enableNav?: boolean;
    }) {
        setLayoutOptions((prev) => ({
            ...prev,
            ...options,
        }));
    }

    return (
        <LayoutContext.Provider
            value={{
                ...layoutOptions,
                selectLayoutOption,
            }}
        >
            {layoutOptions.enableNav ? (
                <div className={styles.layout}>
                    <Navbar routes={routes} />
                    <div className={styles.content}>{children}</div>
                </div>
            ) : (
                <div>{children}</div>
            )}
        </LayoutContext.Provider>
    );
}
