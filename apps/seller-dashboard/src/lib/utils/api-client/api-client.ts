import axios from "axios";
import { getCookie } from "cookies-next";
import formatError from "./error-formatter";
import axiosInstance from "./axios-instance";
import { DefaultObject } from "src/lib/types";
import ApiResponse from "./api-response";
import ApiResponseError from "@lib/utils/api-client/api-response-error";

interface RequestConfigs {
    params?: DefaultObject;
    passError: boolean;
    headers?: DefaultObject;
    serverSideOptions?: DefaultObject;
}

class ApiClient {
    private static defaultRequestConfigs: RequestConfigs = {
        passError: false,
    };

    private static formatConfig(config: RequestConfigs, accessToken: string) {
        return {
            ...config,
            headers: {
                ...config.headers,
                Authorization: accessToken
                    ? `Bearer ${accessToken}`
                    : undefined,
            },
        };
    }

    private static async makeRequestHandler(
        makeRequest: (accessToken: string) => Promise<any>,
        serverSideOptions?: DefaultObject,
        config: RequestConfigs = this.defaultRequestConfigs
    ): Promise<ApiResponse> {
        const accessToken =
            getCookie("access_token", serverSideOptions)?.toString() ?? "";
        axios.defaults.headers.common["Authorization"] = accessToken;

        try {
            const response = await makeRequest(accessToken);
            return new ApiResponse(response);
        } catch (error) {
            const formattedErrorResponse = formatError(error);
            if (config.passError)
                throw ApiResponseError.fromResponse(formattedErrorResponse);
            return formattedErrorResponse;
        }
    }

    public static getRequest = async (
        url: string,
        config: RequestConfigs = this.defaultRequestConfigs
    ): Promise<ApiResponse> =>
        await this.makeRequestHandler(
            (accessToken: string) =>
                axiosInstance.get(url, this.formatConfig(config, accessToken)),
            config.serverSideOptions,
            config
        );

    public static deleteRequest = async (
        url: string,
        config: RequestConfigs = this.defaultRequestConfigs
    ): Promise<ApiResponse> =>
        await this.makeRequestHandler(
            (accessToken: string) =>
                axiosInstance.delete(
                    url,
                    this.formatConfig(config, accessToken)
                ),
            config.serverSideOptions,
            config
        );

    public static postRequest = async (
        url: string,
        data: DefaultObject,
        config: RequestConfigs = this.defaultRequestConfigs
    ): Promise<ApiResponse> =>
        await this.makeRequestHandler(
            (accessToken: string) =>
                axiosInstance.post(
                    url,
                    data,
                    this.formatConfig(config, accessToken)
                ),
            config.serverSideOptions,
            config
        );

    public static putRequest = async (
        url: string,
        data: DefaultObject,
        config: RequestConfigs = this.defaultRequestConfigs
    ): Promise<ApiResponse> =>
        await this.makeRequestHandler(
            (accessToken: string) =>
                axiosInstance.put(
                    url,
                    data,
                    this.formatConfig(config, accessToken)
                ),
            config.serverSideOptions,
            config
        );
}

export default ApiClient;
