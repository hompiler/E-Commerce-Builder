import ApiError from "@models/errors/ApiError";

export default class ServerError extends ApiError {
    constructor(payload?: object) {
        super(500, "Server Error", "Something went wrong on our side.", payload);
    }
}