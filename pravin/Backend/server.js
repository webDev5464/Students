import express, { json, urlencoded } from "express";
import dotenv from "dotenv";
import dbCon from "./configs/dbCon.js";
import { UserRoute } from "./routes/route.js";

const app = express()
app.use(json(), urlencoded({ extended: true }))
dotenv.config()



app.use("/api", UserRoute)

const PORT = process.env.PORT
dbCon(process.env.URL)
app.listen(PORT, () => console.log(`http://localhost:${PORT}`))
