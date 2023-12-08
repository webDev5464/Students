const express = require("express")
const app = express()
const PORT = 8080

require("./connection/connectDatabase")

// API
app.get("/", (req, res) => {
  res.send("Hello")
})

app.listen(PORT, () => {
  console.log(`Server is started from : http://localhost:${PORT}`);
})