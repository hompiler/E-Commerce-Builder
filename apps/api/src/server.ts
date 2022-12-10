import express from "express";
const app = express();
const port = 4040;
const initApp = () => {
    app.listen(port, () => {
        console.log(`Connected at port${port}`);
    });
}


export default initApp ;