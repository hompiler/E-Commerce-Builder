import { ConfigProvider } from "antd";
import React from "react";
import colors from "@styles/colors.module.scss";

export const AntConfigs = ({ children }: { children: React.ReactNode }) => {

    return (
        <ConfigProvider
            theme={{
                token: { colorPrimary: colors.primary },
            }}
        >
            {children}
        </ConfigProvider>
    );
};
