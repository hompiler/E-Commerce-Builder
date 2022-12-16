import {z} from "zod";

const nameSchema = z.string().min(3, {message: "Must be 3 or more characters"});
export const ProfileSchema = z.object({
    firstName: nameSchema,
    lastName: nameSchema,
    email: z.string().email({message: "Must be a valid email"}),
    phoneNumber: z.string(),
    birtDate: z.date({
        invalid_type_error: "date must be in YYYY-MM-ddThh:mm:ss"
    }).optional(),
    address: z.string().optional(),
})

type Profile = z.infer<typeof ProfileSchema>;
export default Profile;