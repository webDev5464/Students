const express = require("express")
const userPostData = require("./controllers/userPostData")
const app = express()
const port = 9090
app.use(express.json())
require("./configs/dbConnect")

app.post("/userPostData", userPostData)

app.listen(port, () => {
  console.log(`Server Is Running : http://localhost:${port}`);
})

// http://localhost:8080/userPostData