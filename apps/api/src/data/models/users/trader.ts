import {z} from "zod";
import {ProfileSchema} from "./profile"

export const TraderSchema = z.object({
    policy: z.string().optional(),
    description: z.string().optional(),
    profile: ProfileSchema,
});

type Trader = z.infer<typeof TraderSchema>;
export default Trader;