import { AppProps } from "next/app";
import "@styles/globals.scss";
import { AntConfigs } from "@/common/assets/configs/AntConfigs";
import * as process from "process";
import { Montserrat } from "@next/font/google";

export const montserrat = Montserrat({
    subsets: ["latin"],
    variable: "--font-montserrat",
});

function MarketMate({ Component, pageProps }: AppProps) {
    console.log(process.env.NEXT_PUBLIC_BACKEND_URL);
    return (
        <div className={montserrat.className}>
            <AntConfigs>
                <Component {...pageProps} />
            </AntConfigs>
        </div>
    );
}

export default MarketMate;
