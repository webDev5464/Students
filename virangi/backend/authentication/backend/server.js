import express, { json, urlencoded } from 'express'
import dotenv from 'dotenv'
import { dbCon } from './configs/dbCon.js'
import { userRouter } from './routes/userRoute.js'

dotenv.config()
const app = express()
app.use(json())
app.use(urlencoded({ extended: true }))

app.use('/', userRouter)

const PORT = process.env.PORT
dbCon(process.env.Database)
app.listen(PORT, () => console.log(`Server is running from : http://localhost:${PORT}`))

// npm i bcryptjs