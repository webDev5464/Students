import { model, Schema } from "mongoose";

const UserSchema = Schema({
  fullname: { type: String },
  email: { type: String },
  username: { type: String },
  pass: { type: String },
  isAdmin: { type: Boolean, default: false },
  token: { type: String, default: null }
})

export const $UserModel = model('user', UserSchema)