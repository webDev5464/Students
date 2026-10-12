import e, { json, urlencoded } from "express";

const app = e()

app.use(urlencoded({ extended: true }), json())

app.get('/', (req, res) => { res.send({ msg: "Welcome to backend" }) })

app.post('/', (req, res) => { 
  const { username } = req.body
  console.log(username)
  res.send(`Hello ${username}`)
})

app.put('/', (req, res) => {

})

app.delete('/', (req, res) => {

})

app.patch('/', (req, res) => {

})



app.listen(8080, () => console.log("Server is running"))