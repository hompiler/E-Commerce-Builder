import {AppProps} from "next/app";
import "@styles/globals.scss";
import {AntConfigs} from "@/common/assets/configs/AntConfigs";
import * as process from "process";

function MarketMate({Component, pageProps}: AppProps) {

    console.log(process.env.NEXT_PUBLIC_BACKEND_URL)
    return (
        <AntConfigs>
            <Component {...pageProps} />
        </AntConfigs>
    );
}

export default MarketMate;
