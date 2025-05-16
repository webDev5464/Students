import e, { json, urlencoded } from "express";
import dotenv from "dotenv";
import { dbCon } from "./configs/db.config.js";
import { userRoute } from "./routes/users.routes.js";
import cors from 'cors'

dotenv.config()
const app =e()
app.use(json(),urlencoded({extended: true }), cors())

app.use("/api",userRoute)  

const {PORT,DatabaseURL } = process.env

dbCon(DatabaseURL)
app.listen(PORT, () => console.log(`http://localhost:${PORT}`))