import express, { json, urlencoded } from 'express'
import { mongodbCon } from './config/dbCon.js'
import dotenv from 'dotenv'
import { userRouter } from './router/userRouter.js'

dotenv.config()
const app = express()
app.use(json())
app.use(urlencoded({ extended: true }))

app.use('/user', userRouter)
// http://localhost:7070/user/register

const port = process.env.local_port
mongodbCon(process.env.local_db)
app.listen(port, console.log(`server is started : http://localhost:${port}`))
