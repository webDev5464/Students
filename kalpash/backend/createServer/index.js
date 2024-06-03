const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send("<h1>Hello Chagan!</h1>")
})

app.listen(1010, () => console.log("Server is Running PORT : 1010"))
// http://localhost:1010/

