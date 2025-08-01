import e from "express";
import env from "dotenv"

const app = e()
env.config()

const { port } = process.env

app.listen(4040, () => console.log(`http://localhost:${port}`))