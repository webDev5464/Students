const express = require('express')
const mongoose = require('mongoose')
const app = express()
app.use(express.json())

//? Database model and Schema
const testingSchema = mongoose.Schema({
  heading: { type: String },
  title: { type: String }
})

const testingModel = mongoose.model("Testing", testingSchema)

//? post
app.post("/postData", async (req, res) => {
  try {
    const { heading, title } = req.body

    if (!heading) throw "Heading is required"
    if (!title) throw "Title is required"

    const saveData = await testingModel({
      heading, title
    }).save()

    if (heading && title) {
      res.send({
        process: true,
        message: "Data add successfully",
        data: saveData
      })
    } else {
      res.send({
        process: false,
        message: "Internal Error"
      })
    }

  } catch (msg) {
    res.send({
      process: false,
      message: msg
    })
  }
})


//? Database Connection
const dbConn = async (req, res) => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/dyan")
    console.log("Connected Db...")
  } catch (msg) {
    console.log(msg.message);
  }
}
dbConn()

//? Local Server listening
const PORT = 8080
app.listen(PORT, () => console.log(`Server is start from : ${PORT}`))
