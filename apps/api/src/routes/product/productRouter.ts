import {Router} from "express";
import {
    addProduct,
    deleteProduct,
    getAllProducts,
    getProductById,
    updateProduct,
} from "./productController";
import validationMiddlewareCreator from "@middlewares/validationMiddlewareCreator";
import {productSchema} from "@models/store/product";

const productRouter = Router();

const {main, update} = validationMiddlewareCreator(productSchema);
productRouter.post("/", main, addProduct);
productRouter.patch("/:id", update, updateProduct);
productRouter.get("/", getAllProducts);
productRouter.get("/:id", getProductById);
productRouter.delete("/:id", deleteProduct);
export default productRouter;
