import React from "react";
import styles from "./PagesPane.module.scss";
import testingPages from "@studio/testing";
import { useRouter } from "next/router";

export default function PagesPane({}) {
    const allPages = testingPages;
    const router = useRouter();
    return (
        <div className={styles.container}>
            <section>
                <ul>
                    {Object.entries(allPages).map(([key, page]) => (
                        <li
                            key={key}
                            onClick={() => router.push(`?page=${key}`)}
                        >
                            {page.head.title}
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
}
