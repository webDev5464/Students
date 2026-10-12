import { model, Schema } from "mongoose";

export const user = model("user", Schema({
  username: String,
  age: Number
}))