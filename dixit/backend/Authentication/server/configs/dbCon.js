import { connect } from "mongoose";

export async function dbCon(URL) {
  try {
    await connect(URL)
    console.log("Database Connected");
  } catch (err) {
    console.log(err.message);
  }
}
