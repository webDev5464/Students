import mongoose, { connect } from 'mongoose'

export const dbCon = async (URL) => {
  try {
    await connect(URL)
    console.log('Connected to MongoDB')
  } catch (err) {
    console.log(err.message);
  }
}
