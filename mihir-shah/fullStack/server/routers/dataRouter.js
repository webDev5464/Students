const express = require("express")
const { addNewUserData, addProduct, getAllData } = require("../controllers/dataControllers")

const dataRoutes = express.Router()

dataRoutes.route("/addData").post(addNewUserData).get(getAllData)

module.exports = dataRoutes