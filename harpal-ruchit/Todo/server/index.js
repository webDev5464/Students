import e, { json, Router, urlencoded } from "express"
import { connect, model, Schema } from "mongoose"
import { rootApi } from "./router.js"
import cors from 'cors'

const app = e()
app.use(json(), urlencoded({ extended: true }), cors())

export const $data = model(
  "data", Schema({
    title: String,
    heading: String
  })
)

app.use('/', rootApi)

const dbCon = async () => {
  await connect("mongodb://127.0.0.1:27017/todo")
  console.log("Db Con")
}

dbCon()

app.listen(4040, () => console.log("Server is running"))