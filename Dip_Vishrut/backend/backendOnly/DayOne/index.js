const express = require("express")
const $app = express()
const mongoose = require("mongoose")

$app.use(express.urlencoded({ extended: true }))

// database connection
mongoose.connect("mongodb://127.0.0.1:27017/DayOne").then(console.log("Connected Database"))

// create model and schema
const dataSchema = mongoose.Schema({
    heading: String,
    title: String
})

const $dataModel = mongoose.model("DayOneData", dataSchema)

// post data in mongodb (database)
const postingData = async (req, res) => {
    const data = $dataModel({
        heading: req.body.heading,
        title: req.body.title
    })

    const result = await data.save()

    if (result) {
        res.send({ process: true, msg: "Your Detail is added" })
    } else {
        res.send({ process: false, msg: "Internal Server Error" })
    }
}

// get data

const getData = async (req, res) => {
    const result = await $dataModel.find({})

    res.send({ process: true, msg: "Get All Datas", result })
}
   
// delete method

const deleteData = async (req, res) => {
    const request = req.params.id
    const result = await $dataModel.findByIdAndDelete(request)
    result ? res.send({
        process: true, msg: "Deleted user data"
    }) : res.send({
        process: false, msg: "Wring Id"
    })
}

// API Path
$app.delete("/deleteData/:id", deleteData)
$app.get("/getData", getData)
$app.post("/postData", postingData)

// server is running
$app.listen(1080, console.log("Server is runing : http://localhost:1080/"))