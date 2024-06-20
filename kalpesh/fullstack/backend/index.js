import express, { json } from "express"
import dotenv from 'dotenv'
import dbCon from "./config/dbCon.js"
import cors from 'cors'
import { userRouter } from "./routers/userRouter.js"

dotenv.config()
const app = express()
const PORT = process.env.PORT
app.use(cors())
app.use(json())
app.use(express.urlencoded({ extended: true }))


app.use('/', userRouter)


dbCon(process.env.DB_URL)
app.listen(PORT, () => console.log(`Server is running : http://localhost:${PORT}`))

// npm i dotenv
// npm i cors