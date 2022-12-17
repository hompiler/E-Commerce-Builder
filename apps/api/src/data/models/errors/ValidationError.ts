import ApiError from "@models/errors/ApiError";
import {z} from "zod";

export default class ValidationError extends ApiError {
    constructor(public payload: object) {
        super(400, "Bad Request", "Validation Error", payload);
    }
}

export class ZodValidationError extends ValidationError {
    constructor(private validationErrorMessage: z.ZodError) {

        const formattedError = validationErrorMessage.issues.reduce(
            function (previousValue: any, currentIssue): object {
                const currentPath = currentIssue.path[currentIssue.path.length - 1];
                return {
                    ...previousValue,
                    [currentPath]: {
                        errors: [...(previousValue[currentPath]?.errors ?? []), currentIssue.message],
                    }
                }
            },
            {})

        super(formattedError);
    }

}

