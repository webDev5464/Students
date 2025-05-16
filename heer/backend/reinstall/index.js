import e, { json, urlencoded } from 'express';
import { connect } from 'mongoose';
import { $Data } from './dataModel.js';

const app = e()
app.use(json(), urlencoded({ extended: true }))

const dbCon = async () => {
  await connect("mongodb://127.0.0.1:27017/heer")
  console.log("Connected to MongoDB")
}

app.get("/", async (req, res) => {
  const getData = await $Data.find()
  res.send(getData)
})

app.post("/sendData", async (req, res) => {
  const { firstName, lastName } = req.body
  await $Data({ firstName, lastName }).save()
  res.send("U are register")
})

dbCon()
app.listen(8080, () => console.log("Server is running..."))
