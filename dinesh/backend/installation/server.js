import express, { json } from 'express'

const app = express()
app.use(json())

app.get('/', async (req, res) => {
  res.send('<h1>Hello Developer!</h1>')
})

app.post('/', async (req, res) => {
  const { fname, lname } = req.body

  res.send("Your data is added.")

  console.log(fname, lname);
})

app.listen(8080, () => console.log('server start from : 8080'))
