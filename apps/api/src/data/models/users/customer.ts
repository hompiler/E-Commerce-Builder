import {z} from "zod";
import {ProfileSchema} from "@models/users/profile";


export const CustomerSchema = z.object({
    gender: z.boolean().optional(),
    profile: ProfileSchema
})

type Customer = z.infer<typeof CustomerSchema>;
export default Customer;