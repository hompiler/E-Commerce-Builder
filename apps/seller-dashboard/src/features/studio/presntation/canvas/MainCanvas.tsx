import React, { useMemo } from "react";
import styles from "./MainCanvas.module.scss";

export default function MainCanvas({
    className,
    children: page,
    onSelect,
}: any) {
    const colors = {
        primary: "#e64f30",
        onPrimary: "#fff",
        background: "#fff",
        onBackground: "#000",
    };

    const pageBody = useMemo(() => {
        console.log({ page });
        return page.getUIComponent(onSelect);
    }, [page]);
    return (
        <div
            id="marketmate-studio"
            className={[className, styles.container].join(" ")}
        >
            <style jsx>{`
                ${pageBody.styles}
            `}</style>
            <main
                style={{
                    background: colors.background,
                    color: colors.onBackground,
                }}
            >
                <nav
                    style={{
                        display: "flex",
                        alignItems: "center",
                        padding: "24px",
                        borderBottom: `1px solid ${colors.onBackground}`,
                    }}
                >
                    Nav
                </nav>
                <main
                // dangerouslySetInnerHTML={{ __html: page.html }}
                >
                    {pageBody.component}
                </main>
                <footer
                    style={{
                        background: "#363636",
                        color: "#fff",
                        padding: "24px",
                    }}
                >
                    Footer
                </footer>
            </main>
        </div>
    );
}
