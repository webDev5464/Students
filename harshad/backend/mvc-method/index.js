import express, { json, urlencoded } from "express";
// npm i dotenv
import dotenv from "dotenv";
import { dbCon } from "./configs/dbCon.js";
import { userRouter } from "./router/userRouter.js";

dotenv.config()
const app = express();
app.use(json());
app.use(urlencoded({ extended: true }));

//* --------------------------------------

app.use("/user", userRouter);

//* --------------------------------------

const port = process.env.PORT;
app.listen(port, () => console.log(`==> http://localhost:${port}`));
dbCon(process.env.DbLink);

// http://localhost:${port}/user/register :- post
