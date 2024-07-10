import mongoose from 'mongoose'

export const mongodbCon = (URL) => {
  try {
    mongoose.connect(URL)
    console.log(`Database connected`)
  } catch (err) {
    console.log(err.message)
  }
}