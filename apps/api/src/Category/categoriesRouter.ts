import {Router} from "express";
import validationMiddlewareCreator from "../middlewares/validationMiddlewareCreator";
import {CategorySchema} from "../models/products/category";
import {addCategory, deleteCategory, getAllCategories, getCategoryById, updateCategory} from "./categoriesController";

export const categoriesRouter = Router();

const {main, update} = validationMiddlewareCreator(CategorySchema);
categoriesRouter.post('/', main, addCategory);
categoriesRouter.patch('/:id', update, updateCategory);
categoriesRouter.get('/', getAllCategories);
categoriesRouter.get('/:id', getCategoryById);
categoriesRouter.delete('/:id', deleteCategory);