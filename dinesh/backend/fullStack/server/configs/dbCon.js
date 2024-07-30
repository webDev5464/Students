import mongoose, { connect } from 'mongoose'

export const dbCon = async (URL) => {
    await connect(URL)
    console.log('Database is connected.')
}