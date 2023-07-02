import React from "react";

export default function StoreCreationLayout({
    children,
    title,
}: {
    title: string;
    children: React.ReactNode;
}) {
    return (
        <main className="h-screen centered column auth-bg">
            <h1 className="h3 text-center text-primary-400">MarketMate</h1>
            <h2 className="h2 text-center mb-8">{title}</h2>
            <div className="bg-white rounded-[20px] card p-[40px] max-w-[500px] w-full overflow-hidden">
                {children}
            </div>
        </main>
    );
}
