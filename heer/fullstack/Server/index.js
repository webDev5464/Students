import e, { json, urlencoded } from "express";
import dotenv from "dotenv";
import { dbCon } from "./configs/db.config.js";
import { userRoute } from "./routes/users.routes.js";
import cors from 'cors'
import cookieParser from "cookie-parser";
import { AdminRoute } from "./routes/admin.routes.js";

dotenv.config()
const app = e()
app.use(json(), urlencoded({ extended: true }), cors(), cookieParser())

app.use("/api", userRoute)
app.use("/api/admin", AdminRoute)

const { PORT, DatabaseURL } = process.env

dbCon(DatabaseURL)
app.listen(PORT, () => console.log(`http://localhost:${PORT}`))