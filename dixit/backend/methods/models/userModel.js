import { Schema, model } from 'mongoose'

const UserSchema = Schema({
  fname: { type: String },
  lname: { type: String }
})

export const $UserModel = model('user', UserSchema)
