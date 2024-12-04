import { model, Schema } from "mongoose";

// const UserSchema = 

export const UserModel = model("userModel", Schema(
    {
        username: { type: String, required: true },
        email: { type: String, required: true },
        password: { type: String, required: true },
        token: { type: String, default: "notLogin" },
        isAdmin: { type: Boolean, default: false },
    }
))
