import { DefaultObject } from "@types";
import ResponseState from "@api-client/response-state";
import ApiResponse from "@api-client/api-response";

export default class ApiResponseError extends Error {
    public state: ResponseState;
    public status: number;
    public error: DefaultObject;
    public headers?: DefaultObject;

    constructor(
        state: ResponseState,
        status: number,
        error: DefaultObject,
        headers?: DefaultObject
    ) {
        super(error.message);
        this.state = state;
        this.status = status;
        this.error = error;
        this.headers = headers;
    }

    static fromResponse(response: ApiResponse): ApiResponseError {
        return new ApiResponseError(
            response.state,
            response.status,
            response.error ?? { message: "No Message" },
            response.headers
        );
    }
}
