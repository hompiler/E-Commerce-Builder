import express from "express";

export default function validationMiddlewareCreator(schema: any) {
    return {
        main: (req: express.Request, res: express.Response, next: express.NextFunction) => {
            try {
                const validationResult = schema.parse(req.body);
                res.status(200).json(validationResult)
            } catch (validationError) {
                res.status(400).json(validationError)
            }
        },
        update: (req: express.Request, res: express.Response, next: express.NextFunction) => {
            try {
                const validationResult = schema.deepPartial().parse(req.body);
                res.status(200).json(validationResult)
            } catch (validationError) {
                res.status(400).json(validationError)
            }
        }
    }
}


