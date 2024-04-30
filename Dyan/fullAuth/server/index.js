const $express = require("express")
const $mongo = require('mongoose')
const cors = require('cors')
const bcrypt = require('bcryptjs')
const $app = $express()

$app.use(cors())
$app.use($express.json())
$app.use($express.urlencoded({ extended: true }))

//!  ----------------- Model ----------------- 

const authSchema = $mongo.Schema({
  username: { type: String },
  email: { type: String },
  pass: { type: String },
  conPass: { type: String },
  token: { type: String, default: "notLogin" }
})

const _authModel = $mongo.model('auth', authSchema)

//!  ----------------- Controllers ----------------- 

//* endPoint, real router, API

$app.get('/', (req, res) => {
  res.send("<h1>Hello World!</h1>")
})

$app.post('/register', async (req, res) => {
  try {
    const { username, email, pass, conPass } = req.body

    if (!username || !email || !pass || !conPass) throw "All fields are required"

    const findUser = await _authModel.findOne({ username })
    if (findUser !== null) throw "Username already registered"

    if (pass.length < 8) throw "Minimum length 8 character require"
    if (pass !== conPass) throw "Passwords do not match"

    res.send({
      process: true,
      msg: `${username} Register Success fully...`,
      data: await _authModel({ username, email, pass: await bcrypt.hash(pass, 10) }).save()
    })
  } catch (err) {
    res.send({
      process: false,
      msg: err
    })
  }
})

$app.post('/login', async (req, res) => {
  try {
    const { email, username, pass } = req.body
    if (!pass) throw "Password field is empty..."
    const findUser = await _authModel.findOne({ $or: [{ email }, { username }] })
    if (!findUser) throw "User not found"
    const checkPass = await bcrypt.compare(pass, findUser.pass)
    if (!checkPass) throw "Invalid password"

    res.send({
      process: true,
      msg: `${email || username} is login successfully...`
    })
  } catch (err) {
    res.send({
      process: false,
      msg: err
    })
  }
})

//!  ----------------- Configs ----------------- 

const PORT = 8080
const dbCon = async (URI) => {
  await $mongo.connect(URI)
  console.log("Connected to MongoDB")
}
$app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
dbCon("mongodb://127.0.0.1:27017/dhyanAuth")
