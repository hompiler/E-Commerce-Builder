import express from "express";
import traderRouter from "@routes/users/trader";
import customerRouter from "@routes/users/customer";
import productRouter from "@routes/product";
import storeRouter from "@routes/store";
import categoriesRouter from "@routes/category";
import errorHandler from "@middlewares/errorHandler";
import NotFoundError from "@models/errors/NotFoundError";
import ServerError from "@models/errors/ServerError";


const dotenv = require("dotenv");
const app = express();
app.use(express.json());
dotenv.config();
const port = process.env.PORT;

app.use((req, res, next) => {
    process
        .on("uncaughtException", (error) => {
            console.log(error)
            next(new ServerError({error: error.message}))
        })
        .on("unhandledRejection", (reason) => {
            console.log(reason)
        })

    next();
})

app.use('/trader', traderRouter);
app.use('/customer', customerRouter);
app.use('/product', productRouter);
app.use('/store', storeRouter);
app.use('/category', categoriesRouter);
app.all("*", (req, res, next) => next(new NotFoundError()))
app.use(errorHandler)
const initApp = () => {
    app.listen(port, () => {
        console.log(`Connected at port ${port}`);
    });
};

export default initApp;
