import express, { json, urlencoded } from "express";
import UserRouter from "./routes/User.routes.js";
import cors from 'cors'
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.use(json({ limit: "16kb" }));
app.use(urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cors()
  // cors({
  //   origin: process.env.CORS_ORIGIN,
  // })
);


app.use("/api",UserRouter)

export default app
