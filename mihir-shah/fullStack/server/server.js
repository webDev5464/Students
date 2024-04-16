const express = require('express')
const cors = require('cors')
const DatabaseConnection = require('./configs/dbCon')
const dataRoutes = require('./routers/dataRouter')
require('dotenv').config()
const app = express()

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: true }))

app.use('/', dataRoutes)

const PORT = process.env.PORT
DatabaseConnection(process.env.DB_URI)
app.listen(PORT, () => {
  console.log(`Server Listen from : http://localhost:${PORT}`);
})
