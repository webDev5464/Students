import e, { json, urlencoded } from 'express';
import { connect } from 'mongoose';

const app = e()
app.use(json(), urlencoded({ extended: true }))

const dbCon = async () => {
  await connect("mongodb+srv://heer:heer@cluster0.jjufo0q.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  console.log("Connected to MongoDB")
}

app.get("/", (req, res) => {
  res.send("Hello World!")
})

app.post("/sendData", (req, res) => {
  const data = req.body
  console.log(16, data)

  res.send("U are register")
})

dbCon()
app.listen(8080, () => console.log("Server is running..."))
