import { Router } from "express";
import {
  getAllCustomers,
  addCustomer,
  getCustomerById,
  updateCustomer,
  deleteCustomer,
} from "./customerController";
import validationMiddlewareCreator from "@middlewares/validationMiddlewareCreator";
import { CustomerSchema } from "@models/users/customer";
import { customerSignUp, customerSignIn } from "auth/customer";

const customerRouter = Router();

const { main, update } = validationMiddlewareCreator(CustomerSchema);
customerRouter.post("/", main, addCustomer);
customerRouter.patch("/:id", update, updateCustomer);
customerRouter.get("/", getAllCustomers);
customerRouter.get("/:id", getCustomerById);
customerRouter.delete("/:id", deleteCustomer);
customerRouter.post("/signup", customerSignUp);
customerRouter.post("/signIn", customerSignIn);
export default customerRouter;
