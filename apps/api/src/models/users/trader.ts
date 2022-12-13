import {z} from "zod";
import {ProfileSchema} from "./profile"

export const TraderSchema = z.object({
    policy: z.string().nullable(),
    description: z.string().nullable(),
    profile: ProfileSchema,
});

type Trader = z.infer<typeof TraderSchema>;
export default Trader;