import { model, Schema } from "mongoose";

export const $user = model(
  "user", Schema({
    username: String,
    email: String,
    pass: String,
    conPass: String,
    isLogin: { type: String, default: '' },
  })
)