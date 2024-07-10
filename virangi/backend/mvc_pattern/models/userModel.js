import { model, Schema } from "mongoose";

const userSchema = Schema({
  fname: { type: String },
  lname: { type: String },
  age: { type: Number }
})

export const $userModel = model('user', userSchema)