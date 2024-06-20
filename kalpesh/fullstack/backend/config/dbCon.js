import mongoose from "mongoose";

const dbCon = async (Database_URL) => {
  await mongoose.connect(Database_URL)
  console.log("Database is connected...");
}

export default dbCon