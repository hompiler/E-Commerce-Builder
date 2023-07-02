import React from "react";
import styles from "./AuthLayout.module.scss";
import Image from "next/image";

export default function AuthLayout({
    children,
    image,
    maxWidth,
}: {
    children: React.ReactNode;
    image: string;
    maxWidth?: string;
}) {
    return (
        <main className={styles.container}>
            <div className={styles.imageSection}>
                <h1 className={styles.titleName}>MarketMate</h1>
                <p className="h3">
                    Get Started with MarketMate and Grow Your Online Business
                </p>
                <div className={styles.imageContainer}>
                    <img
                        style={{
                            maxWidth: maxWidth ?? "100%",
                        }}
                        src={image}
                        alt="image"
                    />
                </div>
            </div>
            <section className={styles.formSection}>{children}</section>
        </main>
    );
}
