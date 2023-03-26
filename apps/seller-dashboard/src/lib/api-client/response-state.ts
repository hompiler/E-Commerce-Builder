enum ResponseState {
    Success = "Success",
    RequestError = "RequestError",
    ServerError = "ServerError",
    NotFoundError = "NotFoundError",
    ClientError = "ClientError",
    NetworkError = "NetworkError",
    Unknown = "Unknown",
}

export default ResponseState;
