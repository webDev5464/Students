import express, { json, urlencoded } from "express";
// npm i cors
import cors from "cors";
import dotenv from "dotenv";
// npm i cookie-parser
import cookieParser from "cookie-parser";
import { dbCon } from "./configs/dbCon.js";
import { userRouters } from "./routers/userRouter.js";

dotenv.config();
const app = express();
app.use(cookieParser());
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(cors());

app.use("/user", userRouters);

const PORT = process.env.PORT;
dbCon(process.env.DB_URL);
app.listen(PORT, () =>
  console.log(`server is started : http://localhost:${PORT}`)
);
