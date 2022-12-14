import {Router} from "express"
import { getAllCustomers,addCustomer,getCustomerById,updateCustomer,deleteCustomer} from "./customerController";

const customerRouter = Router();

customerRouter.post('/',addCustomer);
customerRouter.get('/',getAllCustomers);
customerRouter.get('/:id',getCustomerById);
customerRouter.patch('/:id',updateCustomer);
customerRouter.delete('/:id',deleteCustomer);
export default customerRouter;