import express from "express";
import ApiError from "@models/errors/ApiError";

export default function errorHandler(
    error: express.ErrorRequestHandler, request: express.Request,
    response: express.Response, next: express.NextFunction
) {
    if (error instanceof ApiError) {
        response.status(error.status).send(error.getResponseMessage());
    } else {
        response.status(500).send((error as unknown as Error).message);
    }
}