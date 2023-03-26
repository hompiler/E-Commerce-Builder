import ResponseState from "@api-client/response-state";
import { DefaultObject } from "@/types";

export default class ApiResponse {
    state: ResponseState = ResponseState.Unknown;
    headers: DefaultObject = {};
    data: DefaultObject = {};
    error?: DefaultObject;
    status: number = -1;
    pagination?: DefaultObject;

    constructor(
        response: DefaultObject,
        state?: ResponseState,
        error?: DefaultObject | string
    ) {
        this.state = state === undefined ? ResponseState.Success : state;
        this.status = response.status;
        this.headers = response.headers ?? {};
        if (this.state === ResponseState.Success) {
            this.data = response.data.pagination
                ? response.data.data
                : response.data;
            this.pagination = response.data.pagination;
        } else {
            if (response.data) {
                this.error = error
                    ? typeof error === "string"
                        ? { message: error }
                        : error
                    : response.data;
            } else {
                this.error = { message: "Network Error" };
                this.state = ResponseState.NetworkError;
            }
        }
    }
}
