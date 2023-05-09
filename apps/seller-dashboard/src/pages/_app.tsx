import { AppProps } from "next/app";
import "@lib/assets/styles/globals.scss";
import * as process from "process";
import { Montserrat } from "@next/font/google";
import Head from "next/head";
import { AntConfigs } from "@assets/configs/AntConfigs";

export const montserrat = Montserrat({
    subsets: ["latin"],
    variable: "--font-montserrat",
});

function MarketMate({ Component, pageProps }: AppProps) {
    console.log(process.env.NEXT_PUBLIC_BACKEND_URL);
    return (
        <>
            <Head>
                <title>Market Mate</title>
            </Head>
            <div className={montserrat.className}>
                <AntConfigs>
                    <Component {...pageProps} />
                </AntConfigs>
            </div>
        </>
    );
}

export default MarketMate;
