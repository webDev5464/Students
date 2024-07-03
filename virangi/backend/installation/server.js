import express from 'express'
import { connect } from 'mongoose'

const app = express()

app.get('/', async (req, res) => {
  res.send('Hello World!')
})

const dbCon = async () => {
  await connect("mongodb://localhost:27017/khushi")
  console.log("Database connected");
}

const PORT = 8080
dbCon()
app.listen(PORT, () => console.log(`Server is running from : ${PORT}`))
