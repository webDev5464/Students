import { model, Schema } from "mongoose";

export const $userModel = model(
  "user",
  Schema({
    fullName: { type: String },
    email: { type: String },
    username: { type: String },
    pass: { type: String },
    isAdmin: { type: Boolean, default: false },
  })
);
