const express = require("express")
const userPostData = require("./controllers/userPostData")
const userGetData = require("./controllers/userGetData")
const deleteData = require("./controllers/userDeleteData")
const app = express()
const port = 9090
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
require("./configs/dbConnect")

app.post("/userPostData", userPostData)

app.get("/userGetData", userGetData)

// http://localhost:9090/deleteData/<_id>
app.delete("/deleteData/:userId", deleteData)

app.listen(port, () => {
  console.log(`Server Is Running : http://localhost:${port}`);
})

// http://localhost:8080/userPostData