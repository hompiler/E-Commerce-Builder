import React from "react";
import styles from "./PagesPane.module.scss";
import testingPages from "@studio/testing";
import { useRouter } from "next/router";

export default function PagesPane({}) {
    const allPages = testingPages;
    const router = useRouter();
    return (
        <div className={styles.container}>
            <section></section>
            <section>
                <h2>Pages</h2>
                <div>
                    {Object.entries(allPages).map(([key, page]) => (
                        <div onClick={() => router.push(`?page=${key}`)}>
                            {page.head.title}
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
