import e, { json, urlencoded } from "express";
import { router } from "./router.js";
import { connect } from "mongoose";

const app = e()

app.use(json(), urlencoded({ extended: true }))

app.use('/api', router)

const dbCon = async () => {
  await connect("mongodb://127.0.0.1:27017/dhruv")
  console.log("Database is connected...")
}

dbCon()

app.listen(8080, () => console.log("Server is running..."))

// http://localhost:8080
// http://127.0.0.1:8080

// 127.0.0.1 == localhost

// Install Database :- npm i mongoose

// mongodb://127.0.0.1:27017/databaseName