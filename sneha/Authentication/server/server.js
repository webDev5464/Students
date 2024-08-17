import express, { json, urlencoded } from "express";
import dotenv from "dotenv";
import cors from "cors";
// npm i cors
import { dbCon } from "./configs/dbCon.js";
import { userRouter } from "./router/userRouter.js";
import cookieParser from "cookie-parser";

dotenv.config();
const app = express();
app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api", userRouter);

const port = process.env.port;
dbCon(process.env.localDb);
app.listen(port, () => console.log(`🟢 http://localhost:${port}`));
