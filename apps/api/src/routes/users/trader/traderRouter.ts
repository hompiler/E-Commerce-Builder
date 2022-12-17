import express, {Router} from "express";
import {addTrader, deleteTrader, getAllTraders, getTraderById, updateTrader} from "./traderController";
import {TraderSchema} from "@models/users/trader";
import validationMiddlewareCreator from "@middlewares/validationMiddlewareCreator";

const traderRouter = Router();

const {main, update} = validationMiddlewareCreator(TraderSchema);
traderRouter.post('/',  addTrader);
traderRouter.patch('/:id', update, updateTrader);
traderRouter.get('/', getAllTraders);
traderRouter.get('/:id', getTraderById);
traderRouter.delete('/:id', deleteTrader);

export default traderRouter;