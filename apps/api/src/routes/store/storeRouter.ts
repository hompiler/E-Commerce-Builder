import {Router} from "express"
import {createStore, getStores, findStoreId, updateStore, deleteStore} from "./storeController";
import {storeSchema} from "@models/store/store";
import validationMiddlewareCreator from "@middlewares/validationMiddlewareCreator";

const storeRouter = Router();
const {main, update} = validationMiddlewareCreator(storeSchema);
storeRouter.post('/', main, createStore);
storeRouter.patch('/:id', update, updateStore);
storeRouter.get('/', getStores);
storeRouter.get('/:id', findStoreId);
storeRouter.delete('/:id', deleteStore);

export default storeRouter;