import {z} from "zod";

export const CategorySchema = z.object({
    name: z.string().min(3, {message: "please enter a valid name"}),
    description: z.string().optional(),
});

type Category = z.infer<typeof CategorySchema>;
export default Category;