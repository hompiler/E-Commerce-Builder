import express from "express";
import {router} from "./trader/routes/trader";

const dotenv = require("dotenv");
const app = express();
app.use(express.json());
dotenv.config();
const port = process.env.PORT;
app.use('/trader',router);

const initApp = () => {
  app.listen(port, () => {
    console.log(`Connected at port ${port}`);
  });
};

export default initApp;
