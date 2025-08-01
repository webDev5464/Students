import e, { json, urlencoded } from "express";
import { connect, model, Schema } from "mongoose";

const app = e()

app.use(json(), urlencoded({ extended: true }))

//! get, post, put, delete, patch

//! modules

const user = model(
  "User", Schema({
    name: { type: String, default: null },
    email: String,
    password: String,
  })
)

//! Controllers

app.get("/", async (req, res) => {

  const getDatas = await user.find()

  res.send(getDatas)
})

app.post("/register", async (req, res) => {
  const { name, email, password } = req.body

  console.log({ name, email, password })

  await user({ name, email, password }).save()

  res.send({ process: true, msg: "Register" })
})

//! connections, modules

const dbCon = async () => {
  await connect("mongodb://127.0.0.1:27017/harpal")
  console.log("Connected to MongoDB")
}

dbCon()

app.listen(4040, () => console.log("http://localhost:4040"))