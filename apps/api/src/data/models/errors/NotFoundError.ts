import ApiError from "@models/errors/ApiError";

export default class NotFoundError extends ApiError {
    constructor() {
        super(404, "Client Side Error", "Not Found")
    }
}