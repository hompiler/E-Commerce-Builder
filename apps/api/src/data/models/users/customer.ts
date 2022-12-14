import {boolean, z} from "zod";
import {ProfileSchema} from "./profile"
export const customerSchema =z.object({
    gender :z.boolean(),
    profile : ProfileSchema
})