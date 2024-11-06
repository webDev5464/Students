import express, { json } from "express";
import dotenv from "dotenv";
import dbCon from "./configs/dbCon.js";

const app = express()
app.use(json( ))
dotenv.config()


// async function getMethod(req, res, next) {
//     try {

//     } catch (err) {
//         console.log(err.message)
//     }
// }

// getMethod()

const getMethod = (req, res) => {
    res.send("Hello World")
}

app.route('/').get(getMethod)

const PORT = process.env.PORT
dbCon(process.env.URL)
app.listen(PORT, () => console.log(`http://localhost:${PORT}`))
