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
  const checkEmail = await $userModel.findOne({ email })
  const checkUsername = await $userModel.findOne({ username })

  try {
    if (!username) throw "Require username"
    if (!email) throw "Require Email"
    if (!pass) throw "Require Password"
    if (!conPass) throw "Require confirm Password"
    if (pass !== conPass) throw "password and confirm password does not match."
    if (checkEmail) throw "This email already registered"
    if (checkUsername) throw "This username is already registered"

    if (username, email, pass, conPass) {
      res.send({
        process: true,
        message: "Register Successfully",
        RegisterData: await $userModel({
          username, email, pass
        }).save()
      })
    }
  } catch (msg) {
    res.send({
      process: false,
      message: msg
    })
  }
}

//! user login (post method)
const userLogin = async (req, res) => {
  const { username, email, pass } = req.body
  const emailUsername = await $userModel.findOne({ username }) || await $userModel.findOne({ email })
  console.log(emailUsername);

  try {
    if (!username && !email) throw "Require username/email"
    if (!emailUsername) throw "User is not register"
    if (!pass) throw "Require password"
    if (emailUsername.pass !== pass) throw "Wrong Password"

    if (emailUsername, pass) {
      res.send({
        process: true,
        message: "Login Successfully"
      })
    }
  } catch (msg) {
    res.send({
      process: false,
      message: msg
    })
  }
}


//! Routes
app.post('/register', registerUser)
app.post('/login', userLogin)

//? get All users data (API : register users) 
app.get('/getAllUsers', async (req, res) => res.send(await $userModel.find({})))

/* -=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
mongoose.connect("mongodb://127.0.0.1:27017/vishrut").then(() => {
  console.log('Database connected');
})
app.listen(8080, () => {
  console.log('Server is running from : 8080');
})
