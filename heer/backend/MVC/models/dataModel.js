import { model, Schema } from "mongoose";

export const $Data = model(
  "data", Schema({
    username: String,
    firstName: String,
    lastName: String,
  })
)
