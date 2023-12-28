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


//! connection with database
mongoose.connect("mongodb://127.0.0.1:27017/TestingFormula").then(() => {
  console.log("Database is connected...");
})

//! Server Listening
const PORT = 8080
app.listen(PORT, () => {
  console.log(`Server Started from : http://localhost:${PORT}`);
})