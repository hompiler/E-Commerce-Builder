import React from "react";
import styles from "./PreviewMode.module.scss";
import testingPages from "@studio/testing";
import Head from "next/head";
import useDisableNavigation from "@layout/helpers/layout-context/use-disable-navigation";

export default function PreviewMode({}) {
    useDisableNavigation();
    const page = testingPages["home"];
    return (
        <div id="marketmate-studio">
            <Head>
                <title>{page.head.title}</title>
            </Head>
            <style>{page.style}</style>
            <main dangerouslySetInnerHTML={{ __html: page.html }} />
        </div>
    );
}
