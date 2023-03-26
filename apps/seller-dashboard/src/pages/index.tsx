import { useEffect } from "react";
import ApiClient from "@api-client";

export default function Home() {
    useEffect(() => {
        ApiClient.getRequest("https://mock.codes/400", {
            passError: true,
        })
            .then((res) => {
                console.log({ res });
            })
            .catch((err) => {
                console.log({ err });
            });
    }, []);
    return <div>Hello MarketMate</div>;
}
