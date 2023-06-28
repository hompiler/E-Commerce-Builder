import React from "react";
import styles from "./Page.module.scss";
import Button from "@components/buttons/Button";
import { BackIcon } from "@icons";

export default function Page(props: PageProps) {
    return (
        <div className={styles.page}>
            <header>
                {typeof props.prevTitle === "undefined" ? (
                    <p className={styles.noNavigationTitle}>{props.title}</p>
                ) : (
                    <div className={styles.navigationTitle}>
                        <button>
                            <BackIcon />
                        </button>
                        <div>
                            <p className="text-[10px] my-[2px] text-gray-600 leading-[14px]">
                                Back to {props.prevTitle}
                            </p>
                            <p className="leading-[16px] font-medium">
                                {props.title}
                            </p>
                        </div>
                    </div>
                )}
                <div className={styles.actions}>{props.actions}</div>
            </header>
            <main className={props.className}>{props.children}</main>
        </div>
    );
}

interface PageProps {
    className?: string;
    title: string;
    prevTitle?: string;
    prevRoute?: string;
    actions?: React.ReactNode;
    children: React.ReactNode;
}
