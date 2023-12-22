const express = require("express")
const cors = require("cors")
const $server = express()
$server.use(cors())
$server.use(express.json())
$server.use(express.urlencoded({ extended: true }))
const authRouter = require("./routers/authRouter")

const cookieParser = require("cookie-parser")
$server.use(cookieParser())

// dotenv
require("dotenv").config()
// database Connection 
require("./configs/databaseConnection")(process.env.DATABASE)
// authentication router
$server.use("/api/auth", authRouter)

const PORT = process.env.PORT
$server.listen(PORT, () => console.log(`Server Started: http://localhost:${PORT}`))