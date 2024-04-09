const express = require('express')
const mongoose = require('mongoose')

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// get, post, put, delete
// find, findById, findOne, findByIdAndUpdate, findByIdAndDelete, findAndUpdate, findAndDelete

const dataSchema = mongoose.Schema({
  heading: { type: String, default: "default heading" },
  title: { type: String, default: "default title" },
  age: { typeof: Number }
})

const dataModel = mongoose.model('data', dataSchema)

app.post('/testingPostData', async (req, res) => {
  const { heading, title, age } = req.body

  const saveData = await dataModel({
    heading, title, age
  }).save()

  res.send({
    message: "Your Data is collected...",
    userData: saveData
  })
})

app.get('/getAllData', async (req, res) => {
  const getData = await dataModel.find({})
  res.send(getData)
})

app.put("/UpdateData/:id", async (req, res) => {
  try {
    const paramsId = req.params.id
    const { heading, title } = req.body

    const response = await dataModel.findByIdAndUpdate(paramsId, { heading, title })

    if (!response) {
      return res.status(404).send("No document found with the provided ID.")
    }

    res.send({
      data: await dataModel.findById(paramsId)
    })

  } catch (error) {
    console.error("Error:", error)
    res.status(500).send("Internal Server Error")
  }
})

app.delete('/deleteData', async (req, res) => {
  const dataId = req.body.id
  const response = await dataModel.findByIdAndDelete(dataId)
  console.log(response);
})

const PORT = 8080
const dbCon = async (URI) => {
  try {
    await mongoose.connect(URI)
    console.log("DB connected")
  } catch (err) {
    console.log(err.message);
  }
}

dbCon('mongodb://127.0.0.1:27017/mihirAndDhyan')
app.listen(PORT, () => console.log(`http://localhost:${PORT}`))
