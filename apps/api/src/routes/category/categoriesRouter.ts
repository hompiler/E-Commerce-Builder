import {Router} from "express";
import validationMiddlewareCreator from "@middlewares/validationMiddlewareCreator";
import {CategorySchema} from "@models/store/category";
import {addCategory, deleteCategory, getAllCategories, getCategoryById, updateCategory} from "./categoriesController";

 const categoriesRouter = Router();

const {main, update} = validationMiddlewareCreator(CategorySchema);
categoriesRouter.post('/', main, addCategory);
categoriesRouter.patch('/:id', update, updateCategory);
categoriesRouter.get('/', getAllCategories);
categoriesRouter.get('/:id', getCategoryById);
categoriesRouter.delete('/:id', deleteCategory);

export default categoriesRouter;