const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//! model and schema created
const postDataSchema = mongoose.Schema({
  heading: String,
  title: String
})
const $dataModel = mongoose.model("headTitleFile", postDataSchema)

const postingData = async (req, res) => {
  const { heading, title } = req.body

  res.send({
    process: true, msg: "Your Data is Submitted...", $dataModel: await $dataModel({ heading, title }).save()
  })

  console.log(req.body);
}

app.post('/postData', postingData)

//! Connection with database
mongoose.connect("mongodb://127.0.0.1:27017/vishrut").then(() => {
  console.log("Connected Database...");
})

//! Server start from localhost
app.listen(8080, () => {
  console.log("Server Started : http://localhost:8080");
})