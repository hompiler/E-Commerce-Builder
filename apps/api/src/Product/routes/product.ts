import {Router} from "express"
import { addProduct } from "./productController";


const productRouter = Router();
productRouter.post('/',addProduct);

export default productRouter;
