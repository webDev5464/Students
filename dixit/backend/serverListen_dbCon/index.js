// const express = require('express')

// const person = "Chagan"

// console.log("chagan")

// module.exports = { person }

// ------------ Module method -------------
// import demo from "./demo.js"

// export const person = "magan"

// demo()

//! ---------- Start -----------

import express, { json } from 'express'
import mongoose from 'mongoose'
const app = express()

app.use(json())

//* Create get api
app.get('/', (req, res) => {
  res.status(200).send({ message: "Hello World!" })
})

//* create post request
app.post('/', (req, res) => {
  const { fname, lname } = req.body

  // res.send(
  //   { message: "Your Data Collected", data: { fname, lname } }
  // )

  res.send(`Hello ${fname} ${lname}`)
})

const PORT = 8080
const dbCon = async () => {
  await mongoose.connect("mongodb://127.0.0.1:27017/dixit")
  console.log("Database connected successfully")
}
dbCon()
app.listen(PORT, () => console.log(`Sever is running : http://localhost:${PORT}`))
