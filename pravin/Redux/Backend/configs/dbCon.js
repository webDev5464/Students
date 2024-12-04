import { connect } from "mongoose";

export default async function dbCon(URL) {
    try {
        await connect(URL)
        console.log("Connected to MongoDB")
    } catch (err) {
        console.log("Database not connected")
    }
}
