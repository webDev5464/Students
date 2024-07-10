import express, { json } from 'express'
import { connect } from 'mongoose'

const app = express()

app.use(json())








app.get('/', (req, res) => {
  res.send(['Hello World!'])
})

app.post('/register', (req, res) => {
  // const fname = req.body.fname
  // const lname = req.body.lname

  const { fname, lname } = req.body

  console.log(fname, lname);
  res.send('Your data is added.')
})






// connect('mongodb://localhost:27017').then(() => console.log('database connected'))

const dbCon = async (URL) => {
  await connect(URL)
  console.log('database connected')
}

dbCon('mongodb://localhost:27017')

app.listen(8080, () => console.log('Server is started...'))


//! Backend Methods = get, post, put, patch, delete
//! Mongodb qry = find, findOne, findById, findByIdAndDelete, findByIdAndUpdate, findOneAndUpdate