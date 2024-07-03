import express, { json, urlencoded } from 'express'
import dotenv from 'dotenv'
import { dbCon } from './configs/dbCon.js'
import { userRouter } from './routers/userRouter.js'

const server = express()
// use dotenv
dotenv.config()
server.use(json())
server.use(urlencoded({ extended: true }))


server.use('/api', userRouter)


dbCon(process.env.dbUrl)
const PORT = process.env.code
server.listen(PORT, () => console.log(`Server is listening: http://localhost:${PORT}`))

// npm i dotenv