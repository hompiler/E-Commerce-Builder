import React from "react";
import { StaticImageData } from "next/image";

export default function RevenueCard({
    title,
    amount,
    children,
    background,
}: {
    title: string;
    amount: number;
    background?: StaticImageData;
    children?: React.ReactNode;
}) {
    return (
        <div
            className={[
                "column justify-center p-3 h-full w-full rounded-[10px] bg-cover bg-center",
            ].join(" ")}
            style={{
                background: background
                    ? `url(${background.src})`
                    : `linear-gradient(270deg, var(--color-primary-400) 0%, var(--color-primary-700) 100%)`,
            }}
        >
            <p className="text-[13px] leading-[20px] font-medium text-gray-100 opacity-75">
                {title}
            </p>
            <div className="row-between">
                <p className={"h4 text-gray-100"}>
                    {new Intl.NumberFormat().format(amount)} EGP
                </p>
                <div>{children}</div>
            </div>
        </div>
    );
}
