import { connect } from "mongoose"

export async function dbCon(URL) {
  try {
    connect(URL)
    console.log("Db Connected")
  } catch (e) {
    console.log(e)
  }
}