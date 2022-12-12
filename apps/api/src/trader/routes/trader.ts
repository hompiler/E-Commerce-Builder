import { Router } from "express";
import { addTrader, deleteTrader, getAllTraders, getTraderById, updateTrader } from "./traderController";

export const traderRouter = Router();
traderRouter.post('/',addTrader);
traderRouter.get('/',getAllTraders);
traderRouter.get('/:id',getTraderById);
traderRouter.patch('/:id',updateTrader);
traderRouter.delete('/:id',deleteTrader)