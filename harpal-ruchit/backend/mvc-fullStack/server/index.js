import e, { json, urlencoded } from "express"
import dotenv from "dotenv"
import dbCon from "./configs/dbCon.js"
import { router } from "./router/roue.js"
import cors from 'cors'

const app = e()
dotenv.config()
app.use(urlencoded({ extended: true }), json(), cors())

const { PORT, db } = process.env

app.use("/api", router)

dbCon(db)
app.listen(PORT, console.log(`http://localhost:${PORT}`))