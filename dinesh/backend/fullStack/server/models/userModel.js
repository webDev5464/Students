import mongoose, { model, Schema } from "mongoose";

const UserSchema = Schema({
    fullname: { type: String },
    username: { type: String },
    email: { type: String },
    pass: { type: String }
})

export const $userModel = model('user', UserSchema)