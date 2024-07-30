import express, { json, urlencoded } from 'express'
import dotenv from 'dotenv'
import { dbCon } from './configs/dbCon.js'
import { userRouters } from './routers/userRouter.js'

dotenv.config()
const app = express()
app.use(json())
app.use(urlencoded({ extended: true }))

app.use('/user', userRouters)

const PORT = process.env.PORT
dbCon(process.env.DB_URL)
app.listen(PORT, () => console.log(`server is started : http://localhost:${PORT}`))