import e, { json, urlencoded } from "express";
import dbCon from "./configs/dbCon.js";
import { myRoute } from "./routers/route.js";

const app = e()
app.use(json(), urlencoded({ extended: true }))

app.use("/api", myRoute)

dbCon("mongodb://127.0.0.1:27017/heerMVC")
app.listen(7070, () => console.log("Server is running"))