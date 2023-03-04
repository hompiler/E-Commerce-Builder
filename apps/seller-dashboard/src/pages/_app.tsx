import { AppProps } from "next/app";
import "@styles/globals.scss";
import { AntConfigs } from "@/common/assets/configs/AntConfigs";

function MarketMate({ Component, pageProps }: AppProps) {
    return (
        <AntConfigs>
            <Component {...pageProps} />
        </AntConfigs>
    );
}

export default MarketMate;
