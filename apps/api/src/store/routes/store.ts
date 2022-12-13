import {Router} from "express"
import { createStore } from "./storeController";

const storeRouter =Router();

storeRouter.post ('/',createStore);

export default storeRouter;