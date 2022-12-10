import express from "express";
const dotenv = require("dotenv");
const app = express();
dotenv.config();
const port = process.env.PORT;
const initApp = () => {
  app.listen(port, () => {
    console.log(`Connected at port ${port}`);
  });
};

export default initApp;
