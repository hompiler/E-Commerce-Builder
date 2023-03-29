import express, { Router } from "express";
import {
  addTrader,
  deleteTrader,
  getAllTraders,
  getTraderById,
  updateTrader,
} from "./traderController";
import { TraderSchema } from "@models/users/trader";
import validationMiddlewareCreator from "@middlewares/validationMiddlewareCreator";
import { signIn, signUp } from "auth/trader";

const traderRouter = Router();

const { main, update } = validationMiddlewareCreator(TraderSchema);
traderRouter.post("/", main, addTrader);
traderRouter.patch("/:id", update, updateTrader);
traderRouter.get("/", getAllTraders);
traderRouter.get("/:id", getTraderById);
traderRouter.delete("/:id", deleteTrader);
traderRouter.post("/signup", signUp);
traderRouter.post("/signin", signIn);

export default traderRouter;
