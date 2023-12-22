const express = require("express")
const cors = require("cors") // npm i cors
const app = express()
const mongoose = require("mongoose")

app.use(express())
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//! mongodb Connection

mongoose.connect("mongodb://127.0.0.1:27017/Students").then(console.log("Database is connected"))

//! Schema and model

const userSchema = mongoose.Schema({
  heading: String,
  title: String
})

const userModel = mongoose.model("connection", userSchema)

const postData = async (req, res) => {
  const data = userModel({
    heading: req.body.heading,
    title: req.body.title
  })

  const result = await data.save()

  result ? res.send({ process: true, msg: "Your Data is submitted" }) : res.send({ process: false, msg: "Somethings false" })
}

app.post("/postData", postData)

const PORT = 8080
app.listen(PORT, console.log(`Server Started from: http://localhost:${PORT}`))