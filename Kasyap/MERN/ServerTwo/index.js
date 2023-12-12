const express = require("express")
const userPostData = require("./controllers/userPostData")
const userGetData = require("./controllers/userGetData")
const app = express()
const port = 9090
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
require("./configs/dbConnect")

app.post("/userPostData", userPostData)

app.get("/userGetData", userGetData)

app.listen(port, () => {
  console.log(`Server Is Running : http://localhost:${port}`);
})

// http://localhost:8080/userPostData