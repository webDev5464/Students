import e, { json, urlencoded } from "express"
import { dbCon } from "./config/dbCon.js"
import { userRouter } from "./router/userRouter.js"
import cors from 'cors'

const app = e()
app.use(json(), urlencoded({ extended: true }), cors())

app.use("/api", userRouter)

dbCon("mongodb://127.0.0.1:27017/register")
app.listen(8080, () => console.log("Server"))
