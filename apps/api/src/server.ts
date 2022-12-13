import express from "express";
import {traderRouter} from "./trader/routes/trader";
import customerRouter from "./Customer/routes/customer"
import productRouter from "./Product/routes/product";
import storeRouter from "./store/routes/store";


const dotenv = require("dotenv");
const app = express();
app.use(express.json());
dotenv.config();
const port = process.env.PORT;
app.use('/trader',traderRouter);
app.use('/customer',customerRouter);
app.use('/product',productRouter);
app.use('/store',storeRouter);

const initApp = () => {
  app.listen(port, () => {
    console.log(`Connected at port ${port}`);
  });
};

export default initApp;
