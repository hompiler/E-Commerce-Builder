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
                    {[
                        {
                            key: "home",
                            title: "Home",
                        },
                        {
                            key: "allProducts",
                            title: "All Products",
                        },
                        {
                            key: "cart",
                            title: "Cart",
                        },
                        {
                            key: "privacyPolicy",
                            title: "Privacy Policy",
                        },
                    ].map((page) => (
                        <li
                            key={page.key}
                            onClick={() => router.push(`?page=${page.key}`)}
                        >
                            {page.title}
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
}
