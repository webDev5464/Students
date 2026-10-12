import cors from "cors";
import dotenv from "dotenv";
import e, { json, urlencoded } from "express";
import { dbcon } from "./config/dbcon.js";
import { router } from "./routes/router.js";
import cookieParser from "cookie-parser";

const app = e()
app.use(cors())
app.use(json(), cookieParser());
app.use(urlencoded({ extended: true }))
app.use("/api", router);

dotenv.config();
const { PORT, URL } = process.env


dbcon(URL);



app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
})