import { connect } from "mongoose"

export default async function dbCon(URL) {
  try {
    await connect(URL)
    console.log("Database is connected...")
  } catch (err) {
    console.log(err.message)
  }
}
// Link