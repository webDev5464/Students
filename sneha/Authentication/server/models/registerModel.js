import { Schema, model } from "mongoose";

const registerSchema = Schema({
  fullname: { type: String },
  username: { type: String },
  pass: { type: String },
  email: { type: String },
  isAuth: { type: Boolean, default: false },
  token: { type: String, default: "Not Login" }
})

export const $userModel = model('user', registerSchema)
