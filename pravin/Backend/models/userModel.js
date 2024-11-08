import { model, Schema } from "mongoose";

// const UserSchema = 

export const UserModel = model("userModel", Schema(
    {
        fname: { type: String },
        lname: { type: String },
        age: { type: Number }
    }
))
