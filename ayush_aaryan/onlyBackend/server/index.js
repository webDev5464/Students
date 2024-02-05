const express = require('express')
const mongoose = require('mongoose')
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// app.get('/', (req, res) => {
//   res.send('<h1>Hello World!</h1>')
// })

//! Schema and model
const dataSchema = mongoose.Schema({
  fname: String,
  lname: String,
  age: Number
})

const $dataModel = mongoose.model('myData', dataSchema)

//! post method
const postData = async (req, res) => {
  const { fname, lname, age } = req.body

  res.send({
    message: "Ur Data Save in database"
  })

  await $dataModel({ fname, lname, age }).save()
}

//! All data get
const getData = async (req, res) => {
  res.send(await $dataModel.find({}))
}

//! particular id get
const getUser = async (req, res) => {
  const para = req.params.id
  res.send(await $dataModel.findById(para))
}

//! delete id method
const deleteSingleData = async (req, res) => {
  const para = req.params.id
  res.send(await $dataModel.findByIdAndDelete(para))
}

//! all data delete
const deleteAll = async (req, res) => {
  await $dataModel.deleteMany({})
}

//! put method
const updateData = async (req, res) => {
  const para = req.params.myId
  const { fname, lname, age } = req.body
  await $dataModel.findByIdAndUpdate(para, {
    fname, lname, age
  })
}

//! routes
app.post('/postData', postData)
app.get('/getAllData', getData)
app.get('/getUser/:id', getUser)
app.delete('/deleteUser/:id', deleteSingleData)
app.delete('/deleteAll', deleteAll)
app.put('/updateData/:myId', updateData)

//! db connection
mongoose.connect("mongodb://127.0.0.1:27017/ChaganData").then(() => {
  console.log('Database is connected');
})
//! server listening
app.listen(8080, () => {
  console.log('Server is running from : 8080');
})

//? mongodb compass local data store : mongodb://127.0.0.1:27017/