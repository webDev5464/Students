import { model, Schema } from "mongoose";

export const $userModel = model(
  "userdata", //! collection name
  Schema({ //! data structure
    fname: String,
    lname: String,
    age: Number,
  })
);
