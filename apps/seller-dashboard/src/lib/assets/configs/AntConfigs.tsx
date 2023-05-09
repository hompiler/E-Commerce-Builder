import { ConfigProvider, theme } from "antd";
import React from "react";
import colors from "@styles/theme/colors/colors.module.scss";

export const AntConfigs = ({ children }: { children: React.ReactNode }) => {
    console.log({ colors });
    return (
        <ConfigProvider
            theme={{
                algorithm: theme.defaultAlgorithm,
                token: {
                    colorPrimary: colors.primary,
                    colorBgBase: colors.background,
                },
            }}
        >
            {children}
        </ConfigProvider>
    );
};
