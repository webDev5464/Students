import express, { json, urlencoded } from "express";
import dotenv from "dotenv";
import { dbCon } from "./configs/dbCon.js";
import { UserRouter } from "./routers/userRouter.js";

dotenv.config();
const app = express();
app.use(json(), urlencoded({ extended: true }));

app.use("/api", UserRouter);

const database_name = process.env.Database_name;
const PORT = process.env.PORT;
dbCon(
  process.env.Atlas_Database || `mongodb://127.0.0.1:27017/${database_name}`,
  database_name
);
app.listen(PORT, () => console.log(`==> http://localhost:${PORT}`));
