const express = require("express")
const { addNewUserData, addProduct, getAllData, deleteData } = require("../controllers/dataControllers")

const dataRoutes = express.Router()

dataRoutes.route("/addData").post(addNewUserData).get(getAllData)
dataRoutes.route("/deleteData").post(deleteData)

module.exports = dataRoutes
