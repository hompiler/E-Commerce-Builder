import express from "express";
import {z} from "zod";
import {ZodValidationError} from "@models/errors/ValidationError";

export default function validationMiddlewareCreator(schema: any) {
    return {
        main: async (req: express.Request, res: express.Response, next: express.NextFunction) =>
            await parseSchema(schema, req, res, next),
        update: async (req: express.Request, res: express.Response, next: express.NextFunction) =>
            await parseSchema(schema.deepPartial(), req, res, next),
    }
}

async function parseSchema(schema: z.ZodSchema, req: express.Request, res: express.Response, next: express.NextFunction) {
    schema.parseAsync(req.body)
        .catch((validationErrorMessage: z.ZodError) => next(new ZodValidationError(validationErrorMessage)));
    next();
}
