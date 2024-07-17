import express, { json, urlencoded } from 'express'
import { connect, model, Schema } from 'mongoose'

const app = express()

app.use(json())
app.use(urlencoded({ extended: true }))

// =============================

const UserSchema = Schema({
  fname: String,
  lname: String,
  age: { type: Number, default: 0 }
})

const UserModel = model('user', UserSchema)

// =============================



app.get('/', async (req, res) => {
  const data = await UserModel.find()
  res.send(data)
})



app.post('/register', async (req, res) => {
  // const fname = req.body.fname
  // const lname = req.body.lname

  const { fname, lname, age } = req.body

  const createData = await UserModel.create({ fname, lname, age })

  res.send({
    process: true,
    myMessage: 'Your data is added.',
    myData: createData
  })
})

// app.post('/updateData', async (req, res) => {
//   try {
//     const { fname, lname, age, id } = req.body

//     if (!id) throw new Error('id is required.')

//     const newObj = { fname, lname, age }

//     await UserModel.findByIdAndUpdate({ _id: id }, newObj)

//     res.send([
//       'Your Data is updated',
//       { data: await UserModel.findById({ _id: id }) }
//     ])

//   } catch (err) {
//     res.send({
//       process: false,
//       myMessage: err.message,
//     })
//   }
// })

app.post('/updateData/:id', async (req, res) => {
  try {
    const { id } = req.params
    const { fname, lname, age } = req.body

    if (!id) throw new Error('id is required.')

    const newObj = { fname, lname, age }

    await UserModel.findByIdAndUpdate({ _id: id }, newObj)

    res.send([
      'Your Data is updated',
      { data: await UserModel.findById({ _id: id }) }
    ])

  } catch (err) {
    res.send({
      process: false,
      myMessage: err.message,
    })
  }
})

app.post('/deleteData', async (req, res) => {
  try {
    const { fname } = req.body

    const findOne = await UserModel.findOneAndDelete({ fname })

    res.send(findOne)
  } catch (err) {
    res.send(err.message)
  }
})


// connect('mongodb://localhost:27017').then(() => console.log('database connected'))

const dbCon = async (URL) => {
  await connect(URL)
  console.log('database connected')
}

dbCon('mongodb://localhost:27017/threeInOne')

app.listen(8080, () => console.log('Server is started...'))


//! Backend Methods = get, post, put, patch, delete
//! Mongodb qry = find, findOne, findById, findByIdAndDelete, findByIdAndUpdate, findOneAndUpdate
