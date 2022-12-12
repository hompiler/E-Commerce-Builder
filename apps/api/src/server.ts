import express from "express";
import {traderRouter} from "./trader/routes/trader";
import customerRouter from "./Customer/routes/customer"
const dotenv = require("dotenv");
const app = express();
app.use(express.json());
dotenv.config();
const port = process.env.PORT;
app.use('/trader',traderRouter);
app.use('/customer',customerRouter);

const initApp = () => {
  app.listen(port, () => {
    console.log(`Connected at port ${port}`);
  });
};

export default initApp;
