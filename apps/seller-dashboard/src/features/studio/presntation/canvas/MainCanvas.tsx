import React, { useMemo } from "react";
import styles from "./MainCanvas.module.scss";
import CanvasNav from "@studio/presntation/canvas-components/CanvasNav";
import CanvasFooter from "@studio/presntation/canvas-components/CanvasFooter";

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
                <CanvasNav colors={colors} />
                <main
                // dangerouslySetInnerHTML={{ __html: page.html }}
                >
                    {pageBody.component}
                </main>
                <CanvasFooter />
            </main>
        </div>
    );
}
