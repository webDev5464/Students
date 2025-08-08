import { model, Schema } from "mongoose";

export const $data = model(
  "data", Schema({
    fname: { default: null, type: String },
    lname: String
  })
)