import ResponseState from "./response-state";
import { AxiosError } from "axios";
import ApiResponse from "@lib/utils/api-client/api-response";

export default function formatError(error: Error | any): ApiResponse {
    if (error instanceof AxiosError) return handleServerSideErrors(error);
    else return handleClientSideErrors(error);
}

function handleServerSideErrors(error: AxiosError): ApiResponse {
    const response = error.response ?? {
        status: -1,
        headers: {},
    };
    const status = response.status;

    switch (true) {
        case status >= 500:
            return new ApiResponse(
                response,
                ResponseState.ServerError,
                "Something went wrong on our side."
            );
        case status === 404:
            return new ApiResponse(
                response,
                ResponseState.NotFoundError,
                "Not Found!"
            );
        default:
            return new ApiResponse(response, ResponseState.RequestError);
    }
}

function handleClientSideErrors(error: Error): ApiResponse {
    const response = {
        status: -1,
        headers: {},
        data: error.message,
    };
    return new ApiResponse(response, ResponseState.ClientError);
}
