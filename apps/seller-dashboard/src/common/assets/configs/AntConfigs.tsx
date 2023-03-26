import {ConfigProvider, theme} from "antd";
import React from "react";
import colors from "@styles/colors.module.scss";

export const AntConfigs = ({children}: { children: React.ReactNode }) => {

    return (
        <ConfigProvider
            theme={
                {
                    algorithm: theme.darkAlgorithm,
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
