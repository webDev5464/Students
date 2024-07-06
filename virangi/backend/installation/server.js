import express, { json } from 'express'
import { Schema, connect, model } from 'mongoose'

const app = express()
app.use(json())

// ========= Database Schema and model =================

const userSchema = Schema({
  fname: String,
  lname: String,
  age: Number
})

const userModel = model('user', userSchema)

// =====================================================

app.get('/', async (req, res) => {
  res.send('Hello World!')
})

app.post('/', async (req, res) => {
  try {
    const { fname, lname, age } = req.body

    if (!fname) throw new Error("first name is required")
    if (!lname) throw new Error("last name is required")
    if (!age) throw new Error("age is required")

    const response = await userModel({ fname, lname, age }).save()

    res.send({
      message: 'User created successfully',
      data: response
    })

  } catch (err) {
    res.status(400).send(err.message)
  }
})

// API methods (req methods)
// get - post - put - patch - delete

// mongodb qry
// findOne, findOneAndDelete, findOneAndUpdate, findById, findByIdAndUpdate, findByIdAndDelete 

const dbCon = async () => {
  await connect("mongodb://localhost:27017/khushi")
  console.log("Database connected");
}

const PORT = 8080
dbCon()
app.listen(PORT, () => console.log(`Server is running from : ${PORT}`))
