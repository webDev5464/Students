const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  fname: { type: String },
  lname: { type: String },
  age: { type: Number },
  title: { type: String },
  price: { type: Number }
})

const userModel = mongoose.model('UserData', userSchema)

module.exports = { userModel }