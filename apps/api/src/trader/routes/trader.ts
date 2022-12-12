import { Router } from "express";
import { addTrader, deleteTrader, getAllTraders, getTraderById, updateTrader } from "./controller";

export const router = Router();
router.post('/',addTrader);
router.get('/',getAllTraders);
router.get('/:id',getTraderById);
router.patch('/:id',updateTrader);
router.delete('/:id',deleteTrader)