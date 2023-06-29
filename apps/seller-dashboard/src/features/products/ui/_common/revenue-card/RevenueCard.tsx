import React from "react";

export default function RevenueCard({
    title,
    amount,
    children,
    background,
}: {
    title: string;
    amount: number;
    background?: string;
    children?: React.ReactNode;
}) {
    console.log({ background });
    return (
        <div
            className={[
                "column justify-center p-3 h-full w-full rounded-[10px] bg-cover bg-center",
                background
                    ? `bg-[url(/images/${background})]`
                    : "bg-primary-900",
            ].join(" ")}
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
