import express, {Router} from "express";
import {addTrader, deleteTrader, getAllTraders, getTraderById, updateTrader} from "./traderController";
import {TraderSchema} from "../../models/users/trader";
import validationMiddlewareCreator from "../../middlewares/validationMiddlewareCreator";

export const traderRouter = Router();

const {main, update} = validationMiddlewareCreator(TraderSchema);
traderRouter.post('/', main, addTrader);
traderRouter.get('/', getAllTraders);
traderRouter.get('/:id', getTraderById);
traderRouter.patch('/:id', update, updateTrader);
traderRouter.delete('/:id', deleteTrader);