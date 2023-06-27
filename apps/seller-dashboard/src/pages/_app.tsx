import { AppProps } from "next/app";
import "@lib/assets/styles/globals.scss";
import * as process from "process";
import { Poppins } from "next/font/google";
import Head from "next/head";
import { AntConfigs } from "@assets/configs/AntConfigs";
import Layout from "@layout/index";

export const poppins = Poppins({
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    subsets: ["latin"],
    variable: "--font-poppins",
});

function MarketMate({ Component, pageProps }: AppProps) {
    console.log(process.env.NEXT_PUBLIC_BACKEND_URL);
    return (
        <>
            <Head>
                <title>Market Mate</title>
            </Head>
            <style jsx global>{`
                html {
                    font-family: ${poppins.style.fontFamily};
                }
            `}</style>
            <div >
                <AntConfigs>
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </AntConfigs>
            </div>
        </>
    );
}

export default MarketMate;
