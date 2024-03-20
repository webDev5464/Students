const express = require('express')
const mongoose = require('mongoose')
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

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

//? get
app.get('/getData', async (req, res) => {
  const getAllData = await testingModel.find({})
  res.send(getAllData)
})

app.get('/getById', async (req, res) => {
  const user = req.body
  console.log(user.id);

  const getByIdData = await testingModel.findById(user.id)
  res.send(getByIdData)
})

app.get('/chaganId/:userId', async (req, res) => {
  const params = req.params.userId
  res.send(await testingModel.findById(params))
})

app.post('/defaultGet', async (req, res) => {
  const { heading } = req.body

  const findData = await testingModel.find({ heading })
  if (findData.length > 0) {
    res.send(findData)
  } else {
    res.send("Blank")
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
