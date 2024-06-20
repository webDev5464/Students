import { model, Schema } from "mongoose";

const userSchema = Schema({
  fname: String,
  lname: String,
  age: Number,
})

export const userModel = model('userData', userSchema)