import mongoose, { model, Schema } from "mongoose";

const UserSchema = Schema({
  fullname: { type: String },
  username: { type: String },
  email: { type: String },
  pass: { type: String },
  token: { type: String, default: "" },
  // wishlist: {type: Array, default : []}
  // cart : {type: Array, default : []}
});

export const $userModel = model("user", UserSchema);

/*
! product model

* category - default string
* title - default string
* price - default number
* dic - default number
* details - default Array 
* img - 1, amazon url - default string
* qty ; default 1 Number

*/