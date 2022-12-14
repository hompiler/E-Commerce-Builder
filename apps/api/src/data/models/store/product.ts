import {z} from "zod";
import { CategorySchema } from "./category";
import { storeSchema } from "../store/store";
import { TraderSchema } from "../users/trader";
export const productSchema = z.object({
    name : z.string().min(3, {message: "please enter a valid name"}),
    price : z.number().min(0,{message : "number must be greater than 0"}),
    specification : z.any().optional(),
    image : z.string().optional(),
    quantity : z.number().min(0,{message : "number must be greater than 0"}),
    description : z.string().min(5,{message : "description must be atleast 5 characters"}),
    Categories : CategorySchema.optional(),
    Store : storeSchema,
    suppliedBy : TraderSchema 
})
