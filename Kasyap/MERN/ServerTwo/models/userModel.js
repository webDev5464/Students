const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
  fname: String,
  lname: String,
  age: Number
})

const userModel = mongoose.model("userData", userSchema)

module.exports = userModel
