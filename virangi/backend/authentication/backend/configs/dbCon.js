import mongoose from "mongoose";

export const dbCon = async (URL) => {
  await mongoose.connect(URL)
  console.log('Database connected')
}
