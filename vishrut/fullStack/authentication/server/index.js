const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
/* -=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */

//! Schema and models for structure in database
const userSchema = mongoose.Schema({
  username: { type: String },
  email: { type: String },
  pass: { type: String },
  conPass: { type: String }
})

const $userModel = mongoose.model('authentication', userSchema)

//! register ( Post Method )
const registerUser = async (req, res) => {
  const { username, email, pass, conPass } = req.body

  console.log({
    username: username,
    email: email,
    pass: pass,
    conPass: conPass
  });

  // const checkEmail = await 
  try {

  } catch (msg) {
    res.send({
      process: false,
      message: msg
    })
  }
}

//! Routes
app.post('/register', registerUser)


/* -=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
mongoose.connect("mongodb://127.0.0.1:27017/vishrut").then(() => {
  console.log('Database connected');
})
app.listen(8080, () => {
  console.log('Server is running from : 8080');
})