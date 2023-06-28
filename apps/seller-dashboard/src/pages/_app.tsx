import { AppProps } from "next/app";
import "@lib/assets/styles/globals.scss";
import * as process from "process";
import { Poppins } from "next/font/google";
import Head from "next/head";
import { AntConfigs } from "@assets/configs/AntConfigs";
import Layout from "@layout/index";
import { NavRoute } from "@layout/navbar/nav-routes";
import {
    BagLightIcon,
    BuyLightIcon,
    ChartLightIcon,
    DashboardLightIcon,
    DiscountLightIcon,
    SettingsLightIcon,
} from "@icons";

export const poppins = Poppins({
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    subsets: ["latin"],
    variable: "--font-poppins",
});

function MarketMate({ Component, pageProps }: AppProps) {
    const routes: Array<NavRoute> = [
        {
            path: "/",
            name: "Dashboard",
            icon: <DashboardLightIcon />,
        },
        {
            path: "/products",
            name: "Products",
            icon: <BagLightIcon />,
        },
        {
            path: "/orders",
            name: "Orders",
            icon: <BuyLightIcon />,
        },
        {
            path: "/discounts",
            name: "Discounts",
            icon: <DiscountLightIcon />,
        },
        {
            path: "/Analytics",
            name: "Analytics",
            icon: <ChartLightIcon />,
        },
        {
            path: "/settings",
            name: "Settings",
            icon: <SettingsLightIcon />,
        },
    ];
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
            <div>
                <AntConfigs>
                    <Layout routes={routes}>
                        <Component {...pageProps} />
                    </Layout>
                </AntConfigs>
            </div>
        </>
    );
}

export default MarketMate;
