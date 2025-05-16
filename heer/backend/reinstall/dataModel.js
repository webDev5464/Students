import { model, Schema } from "mongoose";

export const $Data = model(
  "data", Schema({
    firstName: String,
    lastName: String,
  })
)