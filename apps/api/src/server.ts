import express from "express";
import traderRouter from "@routes/users/trader";
import customerRouter from "@routes/users/customer";
import productRouter from "@routes/product";
import storeRouter from "@routes/store";
import categoriesRouter from "@routes/category";


const dotenv = require("dotenv");
const app = express();
app.use(express.json());
dotenv.config();
const port = process.env.PORT;

app.use('/trader', traderRouter);
app.use('/customer', customerRouter);
app.use('/product', productRouter);
app.use('/store', storeRouter);
app.use('/category', categoriesRouter);
const initApp = () => {
    app.listen(port, () => {
        console.log(`Connected at port ${port}`);
    });
};

export default initApp;
