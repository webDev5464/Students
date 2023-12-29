const express = require('express')
const cors = require('cors')
const mongoose = require("mongoose")

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//! model and schema created
const dataSchema = mongoose.Schema({
  heading: String,
  title: String
})
const $dataModel = mongoose.model("ConnectionFormula", dataSchema)


//! post method store data in database
const postData = async (req, res) => {
  const { heading, title } = req.body

  const data = await $dataModel({ heading, title }).save()

  if (data) {
    res.send({
      process: true, msg: "Data store Successfully", $dataModel: data
    })

    console.log(data);
  }

}
app.post("/postData", postData)

//! get data 
const getData = async (req, res) => {
  const getAllData = await $dataModel.find({})

  if (getAllData) {
    res.send({
      process: true, msg: "data get successfully", getAllData
    })
  }
}
app.get("/getData", getData)

//! connection with database
mongoose.connect("mongodb://127.0.0.1:27017/TestingFormula").then(() => {
  console.log("Database is connected...");
})

//! Server Listening
const PORT = 8080
app.listen(PORT, () => {
  console.log(`Server Started from : http://localhost:${PORT}`);
})